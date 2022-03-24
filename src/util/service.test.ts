import { capitalizeFirstLetter } from "./service";

test("Test capitalizeFirstLetter", () => {
    const response = capitalizeFirstLetter("weather app");
    expect(response).toEqual("Weather app");
});
