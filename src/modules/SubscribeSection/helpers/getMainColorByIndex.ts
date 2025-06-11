import { MainSocialCardColor } from '@/styles/constants';

const getMainColorByIndex = (index: number): MainSocialCardColor => {
  return index % 2 === 0 ? MainSocialCardColor.RED : MainSocialCardColor.BLUE;
};

export default getMainColorByIndex;
