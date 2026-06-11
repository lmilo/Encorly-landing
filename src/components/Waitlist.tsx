import { useTranslation } from 'react-i18next';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import WaitlistForm from './WaitlistForm';

const Waitlist = () => {
  const { t } = useTranslation();

  return (
    <Section id="waitlist" className="overflow-hidden">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <SectionHeading
          eyebrow={t('waitlist.eyebrow')}
          title={t('waitlist.title')}
          subtitle={t('waitlist.subtitle')}
        />
        <WaitlistForm idPrefix="waitlist-cta" className="mt-10 w-full max-w-md" />
      </Reveal>
    </Section>
  );
};

export default Waitlist;
