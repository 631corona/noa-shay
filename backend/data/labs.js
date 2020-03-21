var Status = {
  IN_PROGRESS: 1,
  FAILED: 2,
  SUCCESS: 3
};

labs = [
  {
    id: "15e9ac88-1a03-4a02-9569-e6e2203cc85d",
    name: "Adi",
    progress_percentile: 95.4,
    status: Status.IN_PROGRESS
  },
  {
    id: "21558f46-773f-4a4d-a7ef-da6676a89da6",
    name: "Roy",
    progress_percentile: 20.5,
    status: Status.FAILED
  },
  {
    id: "50ac8750-3aa1-4b3a-be89-ad1bc84e2ff6",
    name: "Hen",
    progress_percentile: 0.46,
    status: Status.FAILED
  },
  {
    id: "71c212c2-6489-4abb-9ed7-cd10b0a12547",
    name: "Dan",
    progress_percentile: 46.1,
    status: Status.IN_PROGRESS
  },
  {
    id: "16b36955-0513-483e-a072-a3acb3c834f4",
    name: "Dvir",
    progress_percentile: 78.3,
    status: Status.IN_PROGRESS
  },
  {
    id: "85376118-925e-4ca7-b3cf-064bdbdfb766",
    name: "Amit",
    progress_percentile: 68.9,
    status: Status.IN_PROGRESS
  },
  {
    id: "141474e4-5daf-41d0-acc5-ea7a85acb048",
    name: "Ariel",
    progress_percentile: 10.4,
    status: Status.FAILED
  },
  {
    id: "20c00690-2018-4ed6-af16-7e127cacde72",
    name: "Yoni",
    progress_percentile: 98.9,
    status: Status.IN_PROGRESS
  },
  {
    id: "07d2cd02-b427-4c6c-a6a9-ae0cd9d7d10e",
    name: "Ofir",
    progress_percentile: 57.3,
    status: Status.IN_PROGRESS
  },
  {
    id: "a5c6e76f-1ca8-4465-bf56-5743520a163b",
    name: "yael",
    progress_percentile: 36.8,
    status: Status.FAILED
  }
];

module.exports.labs = labs;
