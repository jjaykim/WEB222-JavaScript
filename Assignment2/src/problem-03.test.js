const data = require('./data');
let result0 = data.results[0];
const {
  transformObservation,
  transformObservations,
  transformObservations2
} = require('./observations');

const isUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

describe('Problem 03 - transformObservation(), transformObservations(), transformObservations2() functions', function () {
  describe("transformObservation() function", function () {
    let sample;

    beforeEach(() => {
      sample = Object.assign({}, result0);
    });

    test("should return an Object", function () {
      let result = transformObservation(sample);
      expect(typeof result).toBe("object");
    });

    test("should return an Object containing an id property", function () {
      let result = transformObservation(sample);
      expect(result.id).toBe(sample.id);
    });

    test("should return an Object containing a speciesGuess property", function () {
      let result = transformObservation(sample);
      expect(result.speciesGuess).toBe(sample.species_guess);
    });

    test("should return an Object containing an isResearchQuality property", function () {
      sample.quality_grade = "research";
      expect(transformObservation(sample).isResearchQuality).toBe(true);

      sample.quality_grade = "casual";
      expect(transformObservation(sample).isResearchQuality).toBe(false);
    });

    test("should return an Object containing a coords Array property", function () {
      let result = transformObservation(sample);
      expect(Array.isArray(result.coords)).toBe(true);
    });

    test("coords Array should include two Numbers", function () {
      sample.location = "43,-72";
      let result = transformObservation(sample);
      expect(result.coords.length).toBe(2);
      expect(typeof result.coords[0]).toBe("number");
      expect(typeof result.coords[1]).toBe("number");
    });

    test("coords Array should be in the form [lng, lat]", function () {
      sample.location = "43,-72";
      let result = transformObservation(sample);
      expect(result.coords[0]).toBe(-72);
      expect(result.coords[1]).toBe(43);
    });

    test("should return an Object containing a user property", function () {
      let result = transformObservation(sample);
      expect(result.user).toBe("@dridgen");
    });

    test("should return an Object containing a photos Array of URLs", function () {
      let result = transformObservation(sample);
      expect(Array.isArray(result.photos)).toBe(true);
      expect(result.photos.length).toBe(1);
      let url = result.photos[0];
      expect(typeof url).toBe("string");
      expect(isUrl(url)).toBe(true);
    });

    test("should return an Object containing a photos Array of multiple URLs", function () {
      const photo = sample.photos[0];
      sample.photos = [photo, photo, photo];

      let result = transformObservation(sample);
      expect(Array.isArray(result.photos)).toBe(true);
      expect(result.photos.length).toBe(3);

      result.photos.forEach((url) => {
        expect(typeof url).toBe("string");
        expect(isUrl(url)).toBe(true);
      });
    });
  });

  // ================================ part 3 - 1 ================================

  describe("transformObservations() function", function () {
    let sample, samples, sampleData;

    beforeEach(() => {
      sample = Object.assign({}, result0);
      samples = [sample];
      sampleData = { results: samples };
    });

    test("should return an Array", function () {
      let result = transformObservations(sampleData);
      expect(Array.isArray(result)).toBe(true);
    });

    test("should return a new Array", function () {
      let result = transformObservations(sampleData);
      expect(result).not.toBe(samples);
    });

    test("should return an Array with the same number of elements", function () {
      let result = transformObservations(sampleData);
      expect(result.length).toBe(samples.length);
    });

    test("should return an Array of Objects", function () {
      let result = transformObservations(sampleData);
      result.forEach((o) => expect(typeof o).toBe("object"));
    });

    test("should return an Array with Objects containing an id property", function () {
      let result = transformObservations(sampleData);
      expect(result[0].id).toBe(samples[0].id);
    });

    test("should return an Object containing a speciesGuess property", function () {
      let result = transformObservations(sampleData);
      expect(result[0].speciesGuess).toBe(sample.species_guess);
    });

    test("should return an Object containing an isResearchQuality property", function () {
      sample.quality_grade = "research";
      expect(transformObservations(sampleData)[0].isResearchQuality).toBe(true);

      sample.quality_grade = "casual";
      expect(transformObservations(sampleData)[0].isResearchQuality).toBe(
        false
      );
    });

    test("should return an Object containing a coords Array property", function () {
      let results = transformObservations(sampleData);
      expect(Array.isArray(results[0].coords)).toBe(true);
    });

    test("coords Array should include two Numbers", function () {
      sample.location = "43,-72";
      let results = transformObservations(sampleData);
      expect(results[0].coords.length).toBe(2);
      expect(typeof results[0].coords[0]).toBe("number");
      expect(typeof results[0].coords[1]).toBe("number");
    });

    test("coords Array should be in the form [lng, lat]", function () {
      sample.location = "43,-72";
      let results = transformObservations(sampleData);
      expect(results[0].coords[0]).toBe(-72);
      expect(results[0].coords[1]).toBe(43);
    });

    test("should return an Object containing a user property", function () {
      let results = transformObservations(sampleData);
      expect(results[0].user).toBe("@dridgen");
    });

    test("should return an Object containing a photos Array of URLs", function () {
      let results = transformObservations(sampleData);
      expect(Array.isArray(results[0].photos)).toBe(true);
      expect(results[0].photos.length).toBe(1);
      let url = results[0].photos[0];
      expect(typeof url).toBe("string");
      expect(isUrl(url)).toBe(true);
    });

    test("should return an Object containing a photos Array of multiple URLs", function () {
      const photo = sample.photos[0];
      sample.photos = [photo, photo, photo];

      let results = transformObservations(sampleData);
      expect(Array.isArray(results[0].photos)).toBe(true);
      expect(results[0].photos.length).toBe(3);

      results[0].photos.forEach((url) => {
        expect(typeof url).toBe("string");
        expect(isUrl(url)).toBe(true);
      });
    });

    test("real-world data should behave the same way as test data", function () {
      expect(transformObservations(data)).toEqual([
        {
          coords: [-79.3565522733, 43.798774894],
          id: 67868131,
          isResearchQuality: true,
          photos: [
            "https://static.inaturalist.org/photos/109762131/square.jpg?1610308133",
          ],
          speciesGuess: "Muskrat",
          user: "@dridgen",
        },
        {
          coords: [-79.3520872, 43.7948387],
          id: 66528178,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/107267018/square.jpeg?1607882195",
          ],
          speciesGuess: "Cordia sebestena sebestena",
          user: "@mohammedmaster",
        },
        {
          coords: [-79.3604902234, 43.798397314],
          id: 61770700,
          isResearchQuality: true,
          photos: [
            "https://static.inaturalist.org/photos/98884441/square.jpg?1601901356",
          ],
          speciesGuess: "Common Eastern Bumble Bee",
          user: "@johnnyrehabb",
        },
        {
          coords: [-79.35387869, 43.79949591],
          id: 61472666,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/98374594/square.jpeg?1601643792",
          ],
          speciesGuess: "Angel's Trumpet",
          user: "@monicayeung",
        },
        {
          coords: [-79.3423842408, 43.7937155457],
          id: 61307088,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/98089550/square.jpeg?1601480884",
            "https://static.inaturalist.org/photos/98089568/square.jpeg?1601480892",
            "https://static.inaturalist.org/photos/98097088/square.jpeg?1601483871",
          ],
          speciesGuess: "Dryobates Woodpeckers",
          user: "@h-easton",
        },
        {
          coords: [-79.3530766, 43.79977493],
          id: 60706122,
          isResearchQuality: true,
          photos: [
            "https://static.inaturalist.org/photos/97090180/square.jpeg?1601038974",
          ],
          speciesGuess: "American trumpet vine",
          user: "@monicayeung",
        },
        {
          coords: [-79.3398328018, 43.7932344873],
          id: 60671346,
          isResearchQuality: true,
          photos: [
            "https://static.inaturalist.org/photos/97031452/square.jpeg?1600996784",
          ],
          speciesGuess: "bittersweet nightshade",
          user: "@kareberry",
        },
        {
          coords: [-79.338568, 43.792673],
          id: 60021049,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/95944256/square.jpeg?1600471203",
            "https://static.inaturalist.org/photos/95944271/square.jpeg?1600471210",
          ],
          speciesGuess: "香茶屬",
          user: "@xinjielin",
        },
        {
          coords: [-79.33852796, 43.79248394],
          id: 60020978,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/95944070/square.jpeg?1600471140",
          ],
          speciesGuess: "矮牽牛屬",
          user: "@xinjielin",
        },
        {
          coords: [-79.33821043, 43.79259349],
          id: 60004808,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/95916480/square.jpeg?1600460651",
            "https://static.inaturalist.org/photos/95916500/square.jpeg?1600460656",
          ],
          speciesGuess: "芹亞科",
          user: "@xinjielin",
        },
      ]);
    });
  });

  describe("transformObservations2() function", function () {
    let sample, samples, sampleData;

    beforeEach(() => {
      sample = Object.assign({}, result0);
      samples = [sample];
      sampleData = { results: samples };
    });

    test("should return an Array", function () {
      let result = transformObservations2(sampleData);
      expect(Array.isArray(result)).toBe(true);
    });

    test("should return a new Array", function () {
      let result = transformObservations2(sampleData);
      expect(result).not.toBe(samples);
    });

    test("should return an Array with the same number of elements", function () {
      let result = transformObservations2(sampleData);
      expect(result.length).toBe(samples.length);
    });

    test("should return an Array of Objects", function () {
      let result = transformObservations2(sampleData);
      result.forEach((o) => expect(typeof o).toBe("object"));
    });

    test("should return an Array with Objects containing an id property", function () {
      let result = transformObservations2(sampleData);
      expect(result[0].id).toBe(samples[0].id);
    });

    test("should return an Object containing a speciesGuess property", function () {
      let result = transformObservations2(sampleData);
      expect(result[0].speciesGuess).toBe(sample.species_guess);
    });

    test("should return an Object containing an isResearchQuality property", function () {
      sample.quality_grade = "research";
      expect(transformObservations2(sampleData)[0].isResearchQuality).toBe(
        true
      );

      sample.quality_grade = "casual";
      expect(transformObservations2(sampleData)[0].isResearchQuality).toBe(
        false
      );
    });

    test("should return an Object containing a coords Array property", function () {
      let results = transformObservations2(sampleData);
      expect(Array.isArray(results[0].coords)).toBe(true);
    });

    test("coords Array should include two Numbers", function () {
      sample.location = "43,-72";
      let results = transformObservations2(sampleData);
      expect(results[0].coords.length).toBe(2);
      expect(typeof results[0].coords[0]).toBe("number");
      expect(typeof results[0].coords[1]).toBe("number");
    });

    test("coords Array should be in the form [lng, lat]", function () {
      sample.location = "43,-72";
      let results = transformObservations2(sampleData);
      expect(results[0].coords[0]).toBe(-72);
      expect(results[0].coords[1]).toBe(43);
    });

    test("should return an Object containing a user property", function () {
      let results = transformObservations2(sampleData);
      expect(results[0].user).toBe("@dridgen");
    });

    test("should return an Object containing a photos Array of URLs", function () {
      let results = transformObservations2(sampleData);
      expect(Array.isArray(results[0].photos)).toBe(true);
      expect(results[0].photos.length).toBe(1);
      let url = results[0].photos[0];
      expect(typeof url).toBe("string");
      expect(isUrl(url)).toBe(true);
    });

    test("should return an Object containing a photos Array of multiple URLs", function () {
      const photo = sample.photos[0];
      sample.photos = [photo, photo, photo];

      let results = transformObservations2(sampleData);
      expect(Array.isArray(results[0].photos)).toBe(true);
      expect(results[0].photos.length).toBe(3);

      results[0].photos.forEach((url) => {
        expect(typeof url).toBe("string");
        expect(isUrl(url)).toBe(true);
      });
    });

    test("real-world data should behave the same way as test data", function () {
      expect(transformObservations2(data)).toEqual([
        {
          coords: [-79.3565522733, 43.798774894],
          id: 67868131,
          isResearchQuality: true,
          photos: [
            "https://static.inaturalist.org/photos/109762131/square.jpg?1610308133",
          ],
          speciesGuess: "Muskrat",
          user: "@dridgen",
        },
        {
          coords: [-79.3520872, 43.7948387],
          id: 66528178,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/107267018/square.jpeg?1607882195",
          ],
          speciesGuess: "Cordia sebestena sebestena",
          user: "@mohammedmaster",
        },
        {
          coords: [-79.3604902234, 43.798397314],
          id: 61770700,
          isResearchQuality: true,
          photos: [
            "https://static.inaturalist.org/photos/98884441/square.jpg?1601901356",
          ],
          speciesGuess: "Common Eastern Bumble Bee",
          user: "@johnnyrehabb",
        },
        {
          coords: [-79.35387869, 43.79949591],
          id: 61472666,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/98374594/square.jpeg?1601643792",
          ],
          speciesGuess: "Angel's Trumpet",
          user: "@monicayeung",
        },
        {
          coords: [-79.3423842408, 43.7937155457],
          id: 61307088,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/98089550/square.jpeg?1601480884",
            "https://static.inaturalist.org/photos/98089568/square.jpeg?1601480892",
            "https://static.inaturalist.org/photos/98097088/square.jpeg?1601483871",
          ],
          speciesGuess: "Dryobates Woodpeckers",
          user: "@h-easton",
        },
        {
          coords: [-79.3530766, 43.79977493],
          id: 60706122,
          isResearchQuality: true,
          photos: [
            "https://static.inaturalist.org/photos/97090180/square.jpeg?1601038974",
          ],
          speciesGuess: "American trumpet vine",
          user: "@monicayeung",
        },
        {
          coords: [-79.3398328018, 43.7932344873],
          id: 60671346,
          isResearchQuality: true,
          photos: [
            "https://static.inaturalist.org/photos/97031452/square.jpeg?1600996784",
          ],
          speciesGuess: "bittersweet nightshade",
          user: "@kareberry",
        },
        {
          coords: [-79.338568, 43.792673],
          id: 60021049,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/95944256/square.jpeg?1600471203",
            "https://static.inaturalist.org/photos/95944271/square.jpeg?1600471210",
          ],
          speciesGuess: "香茶屬",
          user: "@xinjielin",
        },
        {
          coords: [-79.33852796, 43.79248394],
          id: 60020978,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/95944070/square.jpeg?1600471140",
          ],
          speciesGuess: "矮牽牛屬",
          user: "@xinjielin",
        },
        {
          coords: [-79.33821043, 43.79259349],
          id: 60004808,
          isResearchQuality: false,
          photos: [
            "https://static.inaturalist.org/photos/95916480/square.jpeg?1600460651",
            "https://static.inaturalist.org/photos/95916500/square.jpeg?1600460656",
          ],
          speciesGuess: "芹亞科",
          user: "@xinjielin",
        },
      ]);
    });
  });
});
