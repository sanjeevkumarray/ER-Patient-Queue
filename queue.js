class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(name, triageLevel) {
    const patient = { id: Date.now(), name, triageLevel, time: new Date() };
    this.queue.push(patient);
    this.queue.sort((a, b) => a.triageLevel - b.triageLevel || a.time - b.time);
    return patient;
  }
  getQueue() {
    return this.queue;
  }
  treat(id) {
    const index = this.queue.findIndex((p) => p.id == id);
    if (index === -1) return null;
    return this.queue.splice(index, 1)[0];
  }
  discharge(id) {
    const index = this.queue.findIndex((p) => p.id == id);
    if (index === -1) return null;
    return this.queue.splice(index, 1)[0];
  }
}
module.exports = { PriorityQueue };