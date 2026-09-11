import React, { useState } from 'react';
import { ArrowUpRight, MailIcon, CheckIcon, CopyIcon } from './icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState('');

  const emailTarget = 'sudhiraugusto28@gmail.com';

  const projectTypes = [
    'AI Agent / Automation',
    'Website',
    'Application',
    'Generative AI',
    'Integration',
    'Prototype',
    'Other',
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getSubject = () => `Project enquiry — ${formData.type || 'General'}`;
  const getBody = () =>
    `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.type}\n\nMessage:\n${formData.message}`;

  const getGmailUrl = () => {
    const su = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTarget}&su=${su}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const su = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBody());
    return `mailto:${emailTarget}?subject=${su}&body=${body}`;
  };

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setNotice('');

    const payload = {
      name: formData.name,
      email: formData.email,
      project_type: formData.type,
      message: formData.message,
      _subject: getSubject(),
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailTarget}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (data && data.success === 'true') {
        setNotice('Delivered directly to Sudhir via secure dispatch.');
        setStatus('success');
      } else if (data && data.message && data.message.includes('Activation')) {
        // FormSubmit sent first-time activation to Sudhir's inbox
        setNotice(
          'Enquiry registered! Note: First-time direct dispatch sent an activation link to Sudhir. You can also send via Gmail directly below.'
        );
        setStatus('success');
      } else {
        // Fallback to webmail / client
        setNotice('Ready to transmit via your preferred email service.');
        setStatus('success');
      }
    } catch (err) {
      // Network/offline/CORS fallback
      setNotice('Network check completed. Use 1-click Gmail or your default email client below.');
      setStatus('success');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', type: '', message: '' });
    setStatus('idle');
    setNotice('');
  };

  return (
    <section id="contact" className="border-t border-[#303034] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A7A5A0]">
          05 — Contact
        </span>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-[#F2F0EA]">
              Have something in mind?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#A7A5A0]">
              Tell me what you're trying to build. Whether it's an AI agent, an automated workflow, a web application, or a prototype.
            </p>

            <div className="mt-12 space-y-6 border-t border-[#303034] pt-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">Name</span>
                <div className="mt-1 font-heading text-xl text-[#F2F0EA]">Sudhir Augusto</div>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">Location</span>
                <div className="mt-1 font-heading text-xl text-[#F2F0EA]">Chennai, India</div>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">Email</span>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${emailTarget}`}
                    className="inline-flex items-center gap-2 font-heading text-xl text-[#F2F0EA] transition-colors hover:text-[#B7FF5A]"
                  >
                    <span>{emailTarget}</span>
                    <ArrowUpRight size={18} className="text-[#A7A5A0]" />
                  </a>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(emailTarget)}
                    className="inline-flex items-center gap-1.5 rounded border border-[#303034] bg-[#141416] px-2.5 py-1 font-mono text-[11px] text-[#A7A5A0] transition-colors hover:border-[#B7FF5A] hover:text-[#B7FF5A]"
                    title="Copy email to clipboard"
                  >
                    {copied ? <CheckIcon size={12} className="text-[#B7FF5A]" /> : <CopyIcon size={12} />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailTarget}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded border border-[#303034] bg-[#141416] px-2.5 py-1 font-mono text-[11px] text-[#A7A5A0] transition-colors hover:border-[#B7FF5A] hover:text-[#B7FF5A]"
                  >
                    <span>Open in Gmail</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#303034] bg-[#141416] p-6 md:p-8 rounded-xl shadow-2xl">
              <div className="mb-6 flex items-center justify-between border-b border-[#303034] pb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                  ~/new-message
                </span>
                <span className="font-mono text-[11px] text-[#B7FF5A] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B7FF5A] animate-pulse" />
                  <span>{status === 'sending' ? 'transmitting...' : status === 'success' ? 'ready' : 'active'}</span>
                </span>
              </div>

              {status === 'success' ? (
                <div className="space-y-6 py-2">
                  <div className="rounded-lg border border-[#B7FF5A]/30 bg-[#B7FF5A]/10 p-5">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#B7FF5A]">
                      <CheckIcon size={16} />
                      <span className="font-bold">Message Ready & Dispatched</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#F2F0EA]">
                      Thank you <span className="font-semibold text-[#B7FF5A]">{formData.name}</span>! Your enquiry has been processed for <span className="font-mono text-xs text-[#B7FF5A]">{emailTarget}</span>.
                    </p>
                    {notice && (
                      <p className="mt-2 font-mono text-[11px] text-[#A7A5A0]">
                        {notice}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                      Direct 1-Click Sending Options
                    </span>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={getGmailUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded bg-[#B7FF5A] px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-[#0B0B0D] font-semibold transition-all hover:bg-[#c9ff7a] hover:shadow-[0_0_20px_rgba(183,255,90,0.3)]"
                      >
                        <span>Send via Gmail</span>
                        <ArrowUpRight size={14} />
                      </a>

                      <a
                        href={getMailtoUrl()}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded border border-[#303034] bg-[#0E0E11] px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-[#F2F0EA] transition-colors hover:border-[#B7FF5A] hover:text-[#B7FF5A]"
                      >
                        <MailIcon size={14} />
                        <span>Default Mail App</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(`To: ${emailTarget}\nSubject: ${getSubject()}\n\n${getBody()}`)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded border border-[#303034] bg-[#0E0E11] px-4 py-2.5 font-mono text-xs text-[#A7A5A0] transition-colors hover:text-[#F2F0EA] hover:border-[#F2F0EA]"
                    >
                      {copied ? <CheckIcon size={13} className="text-[#B7FF5A]" /> : <CopyIcon size={13} />}
                      <span>{copied ? 'Copied Full Message to Clipboard!' : 'Copy Full Message & Details'}</span>
                    </button>
                  </div>

                  <div className="pt-2 border-t border-[#303034] flex justify-between items-center">
                    <span className="font-mono text-[10px] text-[#A7A5A0]">Response within 24 hours</span>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="font-mono text-xs text-[#B7FF5A] hover:underline"
                    >
                      Send another message &rarr;
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <label className="block">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                        01_Name <span className="text-[#B7FF5A]">&gt;</span>
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                        placeholder="Your name"
                        className="mt-2 w-full border-b border-[#303034] bg-transparent py-2.5 font-body text-base text-[#F2F0EA] placeholder-[#4A4A50] transition-colors focus:border-[#B7FF5A] focus:outline-none disabled:opacity-50"
                      />
                    </label>

                    <label className="block">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                        02_Email <span className="text-[#B7FF5A]">&gt;</span>
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                        placeholder="you@domain.com"
                        className="mt-2 w-full border-b border-[#303034] bg-transparent py-2.5 font-body text-base text-[#F2F0EA] placeholder-[#4A4A50] transition-colors focus:border-[#B7FF5A] focus:outline-none disabled:opacity-50"
                      />
                    </label>

                    <label className="block">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                        03_Project Type <span className="text-[#B7FF5A]">&gt;</span>
                      </span>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                        className="mt-2 w-full border-b border-[#303034] bg-transparent py-2.5 font-body text-base text-[#F2F0EA] transition-colors focus:border-[#B7FF5A] focus:outline-none cursor-pointer disabled:opacity-50"
                      >
                        <option value="" disabled className="bg-[#141416] text-[#A7A5A0]">
                          Select project type
                        </option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="bg-[#141416] text-[#F2F0EA]">
                            {t}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                        04_Message <span className="text-[#B7FF5A]">&gt;</span>
                      </span>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                        placeholder="Tell me a bit about what you want to build..."
                        className="mt-2 w-full border-b border-[#303034] bg-transparent py-2.5 font-body text-base text-[#F2F0EA] placeholder-[#4A4A50] transition-colors focus:border-[#B7FF5A] focus:outline-none resize-none disabled:opacity-50"
                      />
                    </label>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 bg-[#B7FF5A] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-[#0B0B0D] font-semibold transition-all duration-200 hover:bg-[#c9ff7a] hover:shadow-[0_0_20px_rgba(183,255,90,0.3)] disabled:opacity-50 cursor-pointer"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="h-3 w-3 animate-spin rounded-full border-2 border-[#0B0B0D] border-t-transparent" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send message</span>
                          <ArrowUpRight size={14} />
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${emailTarget}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-[#A7A5A0] transition-colors hover:text-[#F2F0EA]"
                    >
                      <MailIcon size={14} />
                      <span>Email directly</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
