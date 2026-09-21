// Reviews from the Google Business Profile that name a brand, copied verbatim.
// Pulled 2026-09-20 (4.9 / 218 reviews). Never add an entry that is not in the profile.
import type { Review } from './reviews';

export const brandReviews: Record<string, Review[]> = {
  lg: [
    {
      author: 'Cindy Cass',
      text: 'My LG dishwasher wasn’t working.  I also needed to address the D80 code on my LG dryer. I didn’t know who to call. After reading several reviews, I called H-Prime. I was scheduled immediately.  Taras arrived at the beginning of the scheduled timeframe.  He started with the dishwasher and fixed it quickly.  He then cleaned out the dryer vent. I was up and running in less than an hour! The  prompt, friendly and  efficient service was terrific! H-Prime will be my go-to.',
      rating: 5,
      date: 'May 2026'
    },
    {
      author: 'Terry Heaton',
      text: 'Tara’s is very knowledgeable and honest. Greatl diagnostic skills. Familar with characteristics and flaws of various brands. ( He worked on LG ice maker. Knew what caused it to fail.)',
      rating: 5,
      date: 'July 2025'
    },
  ],
  ge: [
    {
      author: 'Don Bober',
      text: 'Taras was very professional and instrumental in diagnosing our problem with our GE dishwasher and resolved the issue to our satisfaction. He was very pleasant to deal with and was completely understanding to our issues.  We highly recommend H-Prime / Taras for resolving your appliance issues!!!',
      rating: 5,
      date: 'January 2026'
    },
    {
      author: 'Ted Kuroiwa',
      text: 'I had two other technicians out to take a look at our GE oven. He discovered it was a relay and temperature sensor in the top of the double oven. The broiler would run but not the oven. He diagnosed and fixed it in less than an hour. Great job. And I would recommend to anyone.',
      rating: 5,
      date: 'January 2026'
    },
  ],
  whirlpool: [
    {
      author: 'Pawsitive Restorations',
      text: 'Taras was on site within 3 hours of me requesting help with a broken Whirlpool dryer. Other local repair companies were quoting appointment times more than 4 days out (if they even responded at all). I run a dog rescue and we CANNOT be without a dryer even for a day. Taras was on time, polite, and knowledgeable. He diagnosed the issue (broken heater) within 5 minutes. He had the heater replaced and the entire dryer deep-cleaned and put back together within 40 minutes of arriving. He LITERALLY saved my week! Thank you so much! 😁 I would not hesitate to call them again for any appliance repairs.',
      rating: 5,
      date: 'October 2025'
    },
  ],
};
