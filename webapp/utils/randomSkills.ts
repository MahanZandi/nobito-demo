// Utility to generate random skills from a predefined list
const SKILLS = [
  "جراحی قلب",
  "آنجوگرافی",
  "تست ورزش",
  "اکوکاردیوگرافی",
  "درمان فشار خون",
  "درمان دیابت",
  "مشاوره تغذیه",
  "درمان چاقی",
  "درمان کلسترول",
  "درمان استرس",
  "درمان افسردگی",
  "درمان اضطراب",
  "درمان پوست و مو",
  "درمان آلرژی",
  "درمان آسم"
];

// Use a deterministic approach to prevent hydration errors
export function getRandomSkills(min = 2, max = 4, seed?: number) {
  // If a seed is provided, use it to create deterministic output
  // Otherwise fallback to random behavior (should only be used client-side)
  if (seed !== undefined) {
    // Simple deterministic selection based on seed
    const startIndex = seed % (SKILLS.length - max);
    const count = min + (seed % (max - min + 1));
    return SKILLS.slice(startIndex, startIndex + count);
  }
  
  // Random behavior (warning: causes hydration mismatch if used during SSR)
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...SKILLS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}