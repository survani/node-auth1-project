exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "Giovani",
      password: "JUSTSEEDEDDATATOTESTENDPOINT",
    },
    {
      id: 2,
      username: "John",
      password: "JUSTSEEDEDDATATOTESTENDPOINT",
    },
  ]);
};
