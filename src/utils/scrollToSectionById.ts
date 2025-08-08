export const scrollToSectionById = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
