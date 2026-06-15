import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorStatus) setErrorStatus('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Core validation checks
    if (!formData.name.trim()) {
      setErrorStatus('Please enter your full name (আপনার নাম লিখুন)।');
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorStatus('Please provide either an Email or Phone Number (ইমেইল অথবা মোবাইল নম্বর প্রদান করুন)।');
      return;
    }

    setIsSubmitting(true);
    
    const textMessage = `*নতুন যোগাযোগের অনুরোধ (New Contact Request)*\n━━━━━━━━━━━━━━━━━━\n👤 *নাম (Name):* ${formData.name}\n📧 *ইমেইল (Email):* ${formData.email || 'N/A'}\n📞 *মোবাইল (Mobile):* ${formData.phone || 'N/A'}\n💬 *বার্তা (Message):* ${formData.message || 'N/A'}\n━━━━━━━━━━━━━━━━━━`;
    const whatsappUrl = `https://wa.me/8801317462251?text=${encodeURIComponent(textMessage)}`;

    // Simulate API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        window.open(whatsappUrl, '_blank');
      } catch (err) {
        console.error('WhatsApp redirect blocked', err);
      }
    }, 1200);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitted(false);
    setErrorStatus('');
  };

  return (
    <section id="contact" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info & Map */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 bg-brand-purple/10 text-brand-purple text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-6">
              Connect With Us
            </div>
            <h2 className="text-5xl mb-8 text-brand-purple font-black tracking-tighter">Get In <span className="text-brand-green">Touch</span></h2>
            
            <p className="text-base text-slate-500 mb-12 font-medium leading-relaxed max-w-lg">
              Partner with SIKDER for your next major engineering project. We respond to all technical inquiries within one business day.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-purple flex items-center justify-center text-brand-green rounded-2xl flex-shrink-0 shadow-xl animate-pulse-slow">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-purple uppercase tracking-widest text-[10px] mb-1">HQ Address</h4>
                  <p className="text-slate-600 text-sm font-bold leading-snug">
                    House- 23, Road- 02, Sector-03, Uttara, Dhaka 1230, Bangladesh
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-purple flex items-center justify-center text-brand-green rounded-2xl flex-shrink-0 shadow-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-purple uppercase tracking-widest text-[10px] mb-1">Corporate Hotline</h4>
                  <p className="text-slate-600 text-sm font-black text-brand-purple">
                    <a href="tel:+8801317462251" className="hover:text-brand-green transition-colors">+880 1317-462251</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-purple flex items-center justify-center text-brand-green rounded-2xl flex-shrink-0 shadow-xl">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-brand-green">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.09-2.885-6.956C16.63 2.01 14.154.992 11.53.992c-5.412 0-9.819 4.358-9.822 9.774-.001 1.957.513 3.867 1.49 5.568l-.98 3.58 3.738-.971C5.64 18.73 6.13 18.9 6.647 19.154zm12.19-5.186c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.51-.16-.723.16-.214.32-.832 1.04-1.02 1.255-.188.21-.377.24-.697.08-.32-.16-1.352-.499-2.577-1.59-1.01-.9-1.692-2.01-1.89-2.34-.198-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.723-1.74-.99-2.39-.26-.63-.53-.54-.723-.55-.19-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.103 1.08-1.103 2.63s1.125 3.05 1.28 3.26c.155.22 2.214 3.38 5.36 4.74.75.32 1.33.52 1.79.66.75.24 1.43.2 1.97.12.6-.09 1.89-.77 2.155-1.48.26-.7.26-1.3.18-1.43z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-purple uppercase tracking-widest text-[10px] mb-1">WhatsApp Chat</h4>
                  <p className="text-slate-600 text-sm font-black text-brand-purple">
                    <a href="https://wa.me/8801317462251" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">880 1317-462251</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-purple flex items-center justify-center text-brand-green rounded-2xl flex-shrink-0 shadow-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-purple uppercase tracking-widest text-[10px] mb-1">Email Inquiry</h4>
                  <p className="text-slate-600 text-sm font-semibold text-brand-purple">
                    <a href="mailto:sikderee1984@gmail.com" className="hover:text-brand-green transition-colors">sikderee1984@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Realistic Google Map Embed */}
            <div className="w-full h-72 bg-slate-200 rounded-3xl overflow-hidden relative border-4 border-white shadow-2xl group transition-all duration-300 hover:shadow-brand-purple/20">
              <iframe
                title="Sikder Group Head Office Location"
                src="https://maps.google.com/maps?q=House-%2023,%20Road-%2002,%20Sector-03,%20Uttara,%20Dhaka%201230,%20Bangladesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] contrast-[110%] saturate-[110%] hover:grayscale-0 transition-all duration-500 rounded-2xl"
              ></iframe>
              <div className="absolute top-3 left-3 bg-brand-purple text-brand-green text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg shadow-md pointer-events-none">
                Sikder Group HQ • Uttara
              </div>
            </div>
          </div>

          {/* Contact Form Container with Interactive Transition */}
          <div className="lg:w-1/2 bg-white p-10 md:p-16 rounded-[3rem] shadow-3xl border border-slate-50 relative overflow-hidden flex flex-col justify-center min-h-[500px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form-view"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleFormSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Your Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border-b-2 border-slate-100 py-4 px-4 outline-none focus:border-brand-green transition-colors text-sm font-semibold placeholder:text-slate-300 rounded-t-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Corporate Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border-b-2 border-slate-100 py-4 px-4 outline-none focus:border-brand-green transition-colors text-sm font-semibold placeholder:text-slate-300 rounded-t-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full bg-slate-50 border-b-2 border-slate-100 py-4 px-4 outline-none focus:border-brand-green transition-colors text-sm font-semibold placeholder:text-slate-300 rounded-t-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Requirement Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your technical requirements..."
                      className="w-full bg-slate-50 border-b-2 border-slate-100 py-4 px-4 outline-none focus:border-brand-green transition-colors resize-none text-sm font-semibold placeholder:text-slate-300 rounded-t-xl"
                    ></textarea>
                  </div>

                  {errorStatus && (
                    <div className="p-3 bg-red-50 text-brand-red text-xs font-bold rounded-xl border border-red-100 transition-all">
                      {errorStatus}
                    </div>
                  )}
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-purple text-white font-bold py-5 px-12 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-green hover:text-brand-purple transition-all flex items-center justify-center gap-3 group shadow-2xl rounded-2xl purple-glow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Processing Grid Details...
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto border-2 border-brand-green/20 shadow-lg">
                    <CheckCircle size={44} className="stroke-[2.5]" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-brand-purple tracking-tight">Request Transmitted</h3>
                    <span className="text-[9px] font-black uppercase text-brand-green tracking-[0.3em] block">
                      SIKDER INDUSTRIAL ROUTER
                    </span>
                  </div>

                  <div className="space-y-4 max-w-sm mx-auto text-slate-600 text-xs md:text-sm leading-relaxed font-semibold">
                    <p className="text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      ধন্যবাদ! সিকদার গ্রুপে আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমাদের প্রকৌশলী বা কর্পোরেট প্রতিনিধি অতিসত্বর আপনার সাথে যোগাযোগ করবেন।
                    </p>
                    <p className="text-slate-500 italic">
                      Thank you! Your message has been successfully routed to SIKDER Group. Our engineering representatives will get back to you shortly.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href={`https://wa.me/8801317462251?text=${encodeURIComponent(`*নতুন যোগাযোগের অনুরোধ (New Contact Request)*\n━━━━━━━━━━━━━━━━━━\n👤 *নাম (Name):* ${formData.name}\n📧 *ইমেইল (Email):* ${formData.email || 'N/A'}\n📞 *মোবাইল (Mobile):* ${formData.phone || 'N/A'}\n💬 *বার্তা (Message):* ${formData.message || 'N/A'}\n━━━━━━━━━━━━━━━━━━`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-black px-6 py-3 rounded-full text-[10px] uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-green-500/20"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M12.031 6.172c-2.002 0-3.63 1.628-3.63 3.63 0 .702.2 1.35.543 1.902L8.43 13.9l2.259-.513c.516.3 1.112.476 1.748.476 2.002 0 3.63-1.628 3.63-3.63s-1.628-3.63-3.63-3.63zm3.172 5.1c-.083.136-.33.223-.615.111-.12-.047-.514-.19-.982-.607-.365-.325-.611-.726-.682-.85-.072-.122-.008-.188.053-.248.056-.053.123-.142.185-.213.06-.07.081-.12.12-.2.04-.082.02-.153-.01-.22-.03-.067-.272-.656-.373-.9-.098-.238-.198-.205-.272-.209l-.233-.003c-.08 0-.21.03-.32.153-.11.122-.423.413-.423 1.01 0 .596.434 1.17.494 1.253.06.082.854 1.305 2.07 1.83.29.124.516.198.692.255.291.092.556.08.766.048.234-.035.72-.294.82-.578.102-.284.102-.527.072-.578-.03-.05-.11-.082-.248-.15zM12.008.01c6.657 0 11.996 5.343 11.996 12 0 2.005-.49 3.974-1.42 5.727L24 24l-6.425-1.68c-1.693.92-3.626 1.4-5.567 1.4L12 23.72C5.343 23.72 0 18.378 0 11.72S5.343 .01 12.008 .01zm-.05 1c-5.412 0-9.818 4.359-9.818 9.774 0 1.95.511 3.86 1.488 5.57l-.98 3.58 3.738-.97c1.64.95 3.19 1.45 4.828 1.45v-.01c5.412 0 9.819-4.36 9.819-9.774 0-2.62-1.02-5.09-2.88-6.96C16.63 2.01 14.15 1 11.53 1z" />
                      </svg>
                      Send on WhatsApp
                    </a>

                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 bg-brand-purple text-white hover:bg-brand-green hover:text-brand-purple px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer shadow"
                    >
                      <RefreshCw size={12} /> Submit Another Response
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
