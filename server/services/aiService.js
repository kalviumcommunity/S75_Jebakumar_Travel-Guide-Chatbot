// This service returns a dummy itinerary for now
const generateTripPlan = async (city, startDate) => {
  return {
    city,
    startDate,
    itinerary: [
      { day: 1, activities: ['Visit main square', 'Lunch at local cafe'], tips: 'Wear comfortable shoes' },
      { day: 2, activities: ['Museum visit', 'Evening walk by river'], tips: 'Carry water bottle' }
    ]
  };
};

module.exports = { generateTripPlan };
