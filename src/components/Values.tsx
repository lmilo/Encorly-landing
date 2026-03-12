import { useTranslation } from 'react-i18next';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Music2, Sparkles, UsersRound } from 'lucide-react';

type ValueId = 'connection' | 'diversity' | 'experience';
type ValueIconName = 'UsersRound' | 'Music2' | 'Sparkles';

export type ValueItem = {
  id: ValueId;
  title: string;
  description: string;
  iconName?: ValueIconName;
  icon?: ReactNode;
};

export type ValuesProps = {
  sectionId?: string;
  sectionTitle?: string;
  items?: ValueItem[];
  className?: string;
};

const VALUE_ORDER: ValueId[] = ['connection', 'diversity', 'experience'];

const VALUE_ICON_NAMES: Record<ValueId, ValueIconName> = {
  connection: 'UsersRound',
  diversity: 'Music2',
  experience: 'Sparkles',
};

const ICON_COMPONENTS: Record<ValueIconName, LucideIcon> = {
  UsersRound,
  Music2,
  Sparkles,
};

const IconBadge = ({ iconName }: { iconName: ValueIconName }) => {
  const Icon = ICON_COMPONENTS[iconName];

  return (
  <div className="w-16 h-16 rounded-full bg-violeta-neon/10 flex items-center justify-center mb-6 border border-violeta-neon/20 shadow-[0_0_15px_rgba(147,80,255,0.1)]">
      <Icon className="w-9 h-9 text-violeta-neon" strokeWidth={2.1} aria-hidden="true" />
  </div>
  );
};

const Values = ({ sectionId = 'values', sectionTitle, items, className = '' }: ValuesProps) => {
  const { t } = useTranslation();

  const valuesData: ValueItem[] =
    items ??
    VALUE_ORDER.map((id) => ({
      id,
      title: t(`values.${id}`),
      description: t(`values.${id}_desc`),
      iconName: VALUE_ICON_NAMES[id],
    }));

  return (
    <section id={sectionId} className={`py-24 bg-negro-puro relative ${className}`.trim()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-headings font-bold text-blanco-puro mb-16">
          {sectionTitle ?? t('values.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valuesData.map((val) => (
            <article key={val.id} className="flex flex-col items-center">
              {val.icon ?? <IconBadge iconName={val.iconName ?? VALUE_ICON_NAMES[val.id]} />}
              <h3 className="text-xl font-headings font-bold text-blanco-puro">
                {val.title}
              </h3>
              <p className="mt-3 max-w-xs text-blanco-puro/70 font-body leading-relaxed">
                {val.description}
              </p>
              {/* Línea decorativa inferior */}
              <div className="mt-4 h-0.5 w-8 bg-vibe-gradient rounded-full opacity-50"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;