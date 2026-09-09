import { useEffect } from 'react';
export default function ContactModal({onClose, title = 'Request a Demo'}: {onClose: () => void; title?: string}) {
 useEffect(() => {
  let cancelled = false;
  const closed = () => onClose();
  let contact: Element | null = null;
  customElements.whenDefined('corporate-contact').then(() => {
   if (cancelled) return;
   contact = document.querySelector('corporate-contact');
   contact?.addEventListener('contact-closed', closed, {once: true});
   document.dispatchEvent(new CustomEvent('corporate-contact-open', {detail: {title}}));
  });
  return () => {cancelled = true; contact?.removeEventListener('contact-closed', closed);};
 }, [title, onClose]);
 return null;
}
