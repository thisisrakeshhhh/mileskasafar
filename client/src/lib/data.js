export const destinations = [
  {
    slug: "himachal",
    name: "Himachal Pradesh",
    tagline: "Snow valleys, cedar forests, slow mountain mornings.",
    blurb:
      "Trips built for couples, groups, and mountain getaways with flexible add-ons, private transfers, and handpicked stays.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    facts: ["Shimla, Manali, Kasol routes", "Best for 4-7 day trips", "Private and group departures"]
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    tagline: "Sacred rivers, alpine meadows, and calm hill towns.",
    blurb:
      "Built around Rishikesh, Mussoorie, Nainital, and Corbett with routes that balance activity, road time, and easy stays.",
    heroImage:
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1400&q=80",
    facts: ["Rishikesh and Mussoorie", "Adventure and family routes", "Best for 3-6 day trips"]
  },

  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    tagline: "Spiritual journeys and heritage trails.",
    blurb:
      "Explore the spiritual heart of India with trips covering Vrindavan, Mathura, Varanasi and more.",
    heroImage:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1400&q=80",
    facts: ["Vrindavan & Mathura", "Heritage and temples", "Best for 2-4 day trips"]
  }
];

export const travelPackages = [
  {
    slug: "manali-kasol-circuit",
    title: "Manali and Kasol Circuit",
    destination: "himachal",
    summary: "A cold-weather loop with Solang Valley, riverside cafes, and easy adventure slots.",
    heroImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=80",
    priceFrom: 18999,
    duration: "5 nights / 6 days",
    groupSize: "2-12 travelers",
    stays: ["2 nights Manali", "2 nights Kasol", "1 overnight Volvo transfer"],
    highlights: ["Snow-point excursion", "Cafe trail in Kasol", "Private pickup option", "Bonfire evening"],
    itinerary: [
      { day: "Day 1", title: "Delhi to Manali", details: "Overnight departure with briefing and route support." },
      { day: "Day 2", title: "Manali local", details: "Check-in, temple circuit, Old Manali walk, and market time." },
      { day: "Day 3", title: "Solang Valley", details: "Adventure activities, mountain views, and flexible afternoon." },
      { day: "Day 4", title: "Transfer to Kasol", details: "Scenic drive with stopovers and riverside check-in." },
      { day: "Day 5", title: "Kasol and Chalal", details: "Short hike, cafe hopping, and leisure evening." },
      { day: "Day 6", title: "Return", details: "Breakfast, local shopping, and departure." }
    ]
  },
  {
    slug: "shimla-narkanda-escape",
    title: "Shimla and Narkanda Escape",
    destination: "himachal",
    summary: "A calmer Himachal route with mountain roads, orchards, and premium mid-range stays.",
    heroImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    priceFrom: 22499,
    duration: "4 nights / 5 days",
    groupSize: "2-10 travelers",
    stays: ["2 nights Shimla", "2 nights Narkanda"],
    highlights: ["Mall Road evening", "Apple orchard visit", "Scenic ridge viewpoints", "Private SUV"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Shimla", details: "Transfer, check-in, and evening on Mall Road." },
      { day: "Day 2", title: "Shimla sightseeing", details: "Jakhoo, Kufri, and heritage route." },
      { day: "Day 3", title: "Drive to Narkanda", details: "Slow mountain drive with sunset ridge walk." },
      { day: "Day 4", title: "Narkanda slow day", details: "Orchard visit and leisure evening." },
      { day: "Day 5", title: "Departure", details: "Breakfast and private drop-off." }
    ]
  },
  {
    slug: "rishikesh-mussoorie-getaway",
    title: "Rishikesh and Mussoorie Getaway",
    destination: "uttarakhand",
    summary: "A blend of riverside calm, adventure, and classic hill-town pacing.",
    heroImage:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80",
    priceFrom: 16999,
    duration: "4 nights / 5 days",
    groupSize: "2-8 travelers",
    stays: ["2 nights Rishikesh", "2 nights Mussoorie"],
    highlights: ["Ganga Aarti", "Rafting slot", "Kempty Falls drive", "Mall Road walk"],
    itinerary: [
      { day: "Day 1", title: "Delhi to Rishikesh", details: "Arrival, check-in, and riverside evening." },
      { day: "Day 2", title: "Rishikesh local", details: "Rafting, bridge hopping, and Triveni Ghat Aarti." },
      { day: "Day 3", title: "Drive to Mussoorie", details: "Scenic hill route and evening market walk." },
      { day: "Day 4", title: "Mussoorie sightseeing", details: "Viewpoints, falls, and local cafes." },
      { day: "Day 5", title: "Return", details: "Checkout and road transfer back." }
    ]
  },

  {
    slug: "churdhar-trek",
    title: "Churdhar Peak Trek",
    destination: "himachal",
    summary: "A thrilling trek to the highest peak in the outside Himalayan range.",
    heroImage:
      "https://images.unsplash.com/photo-1629851724653-ecbe9e2de071?auto=format&fit=crop&w=1400&q=80",
    priceFrom: 6999,
    duration: "2 nights / 3 days",
    groupSize: "4-12 travelers",
    stays: ["1 night Nauradhar (Basecamp)", "1 night camping at Churdhar"],
    highlights: ["Highest peak of Sirmaur", "Shiva Temple at summit", "Forest trails", "Camping under stars"],
    itinerary: [
      { day: "Day 1", title: "Reach Nauradhar", details: "Arrival at basecamp, acclimatization and briefing." },
      { day: "Day 2", title: "Trek to Churdhar", details: "Steep ascent through cedar forests, reach camp, visit temple." },
      { day: "Day 3", title: "Descent and Departure", details: "Sunrise views, trek back down and depart." }
    ]
  },
  {
    slug: "chopta-tungnath",
    title: "Chopta Tungnath Trek",
    destination: "uttarakhand",
    summary: "A beautiful trek to the highest Shiva temple in the world with stunning Himalayan views.",
    heroImage:
      "https://images.unsplash.com/photo-1610386762311-66ee3b15f5c3?auto=format&fit=crop&w=1400&q=80",
    priceFrom: 8499,
    duration: "3 nights / 4 days",
    groupSize: "4-15 travelers",
    stays: ["2 nights Chopta", "1 night overnight travel"],
    highlights: ["Tungnath Temple", "Chandrashila Summit for sunrise", "Mini Switzerland of India"],
    itinerary: [
      { day: "Day 1", title: "Delhi to Chopta", details: "Overnight drive to the basecamp." },
      { day: "Day 2", title: "Chopta Arrival", details: "Check-in at campsites, leisure time and acclimatization." },
      { day: "Day 3", title: "Tungnath & Chandrashila", details: "Early morning trek to Tungnath, then to Chandrashila peak. Return to camp." },
      { day: "Day 4", title: "Departure", details: "Breakfast and drive back." }
    ]
  },
  {
    slug: "vrindavan-spiritual-tour",
    title: "Vrindavan Spiritual Tour",
    destination: "uttar-pradesh",
    summary: "Immerse yourself in the divine atmosphere of Krishna's land.",
    heroImage:
      "https://images.unsplash.com/photo-1601058079549-34b8c6a086ba?auto=format&fit=crop&w=1400&q=80",
    priceFrom: 4999,
    duration: "1 night / 2 days",
    groupSize: "2-10 travelers",
    stays: ["1 night Vrindavan"],
    highlights: ["Banke Bihari Temple", "Prem Mandir Evening Light Show", "ISKCON Temple", "Yamuna Aarti"],
    itinerary: [
      { day: "Day 1", title: "Arrival & Darshan", details: "Check-in, visit major temples, Prem Mandir lighting in evening." },
      { day: "Day 2", title: "Yamuna Aarti & Departure", details: "Morning Aarti, local sweets shopping and return." }
    ]
  },
  {
    slug: "triund-top",
    title: "Triund Top Trek",
    destination: "himachal",
    summary: "The most popular weekend trek offering majestic views of the Dhauladhar range.",
    heroImage:
      "https://images.unsplash.com/photo-1605335029312-309d949ec305?auto=format&fit=crop&w=1400&q=80",
    priceFrom: 5499,
    duration: "2 nights / 3 days",
    groupSize: "4-15 travelers",
    stays: ["1 night Dharamshala/Mcleodganj", "1 night camping at Triund"],
    highlights: ["Dhauladhar mountain views", "Bhagsunag Waterfall", "Hilltop camping", "Star gazing"],
    itinerary: [
      { day: "Day 1", title: "Mcleodganj Arrival", details: "Check-in, visit cafes, Dalai Lama Temple and local market." },
      { day: "Day 2", title: "Trek to Triund", details: "Start trek from Gallu Devi, reach top by afternoon, enjoy sunset." },
      { day: "Day 3", title: "Descent", details: "Morning views, descend via Bhagsunag waterfall and depart." }
    ]
  }
];

export function getDestination(slug) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getPackagesByDestination(slug) {
  return travelPackages.filter((travelPackage) => travelPackage.destination === slug);
}

export function getPackage(slug) {
  return travelPackages.find((travelPackage) => travelPackage.slug === slug);
}
