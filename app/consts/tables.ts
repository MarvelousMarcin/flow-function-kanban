export const tables = {
  Development: {
    columns: [
      { name: "Backlog", stage: 1 },
      { name: "Build", stage: 2 },
      { name: "Test", stage: 3 },
      { name: "Done", stage: 4 },
    ],
  },
  Design: {
    columns: [
      { name: "Backlog", stage: 1 },
      { name: "Mock-Up Creation", stage: 2 },
      { name: "Architecture Review", stage: 3 },
      { name: "Done", stage: 4 },
    ],
  },
  "Strategic Value": {
    columns: [
      { name: "Backlog", stage: 1 },
      { name: "Impact Analysis", stage: 2 },
      { name: "Strategic Evaluation", stage: 3 },
      { name: "Done", stage: 4 },
    ],
  },
  Release: {
    columns: [
      { name: "Backlog", stage: 1 },
      { name: "Install", stage: 2 },
      { name: "Validate", stage: 3 },
      { name: "Done", stage: 4 },
    ],
  },
};
