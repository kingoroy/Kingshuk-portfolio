export const redirectGithub = () => {
    return window.open('https://github.com/kingoroy', '_blank');
};

export const redirectDesicartGithub = () => {
    return window.open('https://github.com/Ecommerce-Application-Demo/ecommerce-frontend', '_blank');
}

export const redirectLinkedIn = () => {
    return window.open('https://www.linkedin.com/in/kingshukroy14/', '_blank');
}

export const redirectInstagram = () => {
    return window.open('https://www.instagram.com/kingofroy.713/', '_blank');
}

export const redirectDesicart = () => {
    return window.open('https://desicart.vercel.app', '_blank');
}

export const calculateExperience = () => {
  const startDate = new Date("2022-04-11T00:00:00Z");
  const now = new Date();
  const diff = now - startDate;

  const totalYears = diff / (1000 * 60 * 60 * 24 * 365.25); // Including leap years
  const years = Math.floor(totalYears);
  const monthsFraction = totalYears - years;
  const months = Math.floor(monthsFraction * 12);
  const exactYears = (years + months / 12).toFixed(1);

  // Calculate hours, minutes, and seconds
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();

  return { exactYears, hours, minutes, seconds };
};