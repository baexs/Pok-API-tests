const axios = require("axios");

test("GET /pokemon/25 retourne Pikachu", async () => {
const response = await axios.get("https://pokeapi.co/api/v2/pokemon/25");
expect(response.status).toBe(200);
expect(response.data.name).toBe("pikachu");
expect(response.data.id).toBe(25);
expect(response.data.types).toBeInstanceOf(Array);
});

test("GET /type/13 retourne le type electric", async () => {
const response = await axios.get("https://pokeapi.co/api/v2/type/13");
expect(response.status).toBe(200);
expect(response.data.name).toBe("electric");
});

test("GET /berry/1 retourne la baie cheri", async () => {
const response = await axios.get("https://pokeapi.co/api/v2/berry/1");
expect(response.status).toBe(200);
expect(typeof response.data.id).toBe("number");
expect(response.data.name).toBe("cheri");
});