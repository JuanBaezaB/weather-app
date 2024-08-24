import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;

interface Props {
  icon: string;
  className?: string;
  outline?: boolean;
}

const isIconName = (icon: string): icon is IconName => {
  return icon in SolidIcons || icon in OutlineIcons;
};

export const HeroIcon = (props: Props): JSX.Element => {
  const { icon, className = 'w-6 h-6 text-gray-600', outline = false } = props;

  if (!isIconName(icon)) {
    throw new Error(`Invalid icon name: ${icon}`);
  }

  const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon];

  return <Icon className={className} />;
};