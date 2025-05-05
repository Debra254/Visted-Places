// Destination constructor
function Destination(location, landmarks, timeOfYear, notes) {
    this.location = location;
    this.landmarks = Array.isArray(landmarks) ? landmarks : [landmarks];
    this.timeOfYear = timeOfYear;
    this.notes = notes;
  }
  
  Destination.prototype.landmarksList = function() {
    return this.landmarks.join(", ");
  };
  
  Destination.prototype.details = function() {
    return `Visited ${this.location} in ${this.timeOfYear}. Landmarks: ${this.landmarksList()}. Notes: ${this.notes}`;
  };
  
  // TravelJournal constructor
  function TravelJournal() {
    this.destinations = [];
  }
  
  TravelJournal.prototype.addDestination = function(destination) {
    this.destinations.push(destination);
  };
  
  TravelJournal.prototype.findDestination = function(location) {
    return this.destinations.find(dest => 
      dest.location.toLowerCase() === location.toLowerCase()
    ) || null;
  };
  
  TravelJournal.prototype.removeDestination = function(location) {
    const initialLength = this.destinations.length;
    this.destinations = this.destinations.filter(dest => 
      dest.location.toLowerCase() !== location.toLowerCase()
    );
    return initialLength !== this.destinations.length;
  };
  
  // Export for Node.js environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      Destination,
      TravelJournal
    };
  }