const { PriorityQueue } = require("../queue");

test("should add a patient and retrieve queue", () => {
  const queue = new PriorityQueue();
  queue.enqueue("John Doe", 2);
  expect(queue.getQueue().length).toBe(1);
});

test("should treat a patient correctly", () => {
  const queue = new PriorityQueue();
  const patient = queue.enqueue("Jane Doe", 1);
  expect(queue.treat(patient.id).name).toBe("Jane Doe");
});

test("should discharge a patient correctly", () => {
  const queue = new PriorityQueue();
  const patient = queue.enqueue("Alice", 3);
  expect(queue.discharge(patient.id).name).toBe("Alice");
});