const { isRightSolutionForQuestion } = require('./Quiz');
describe('isRightSolutionForQuestion function', () => {
  const Fragen = {
    Fragen: [
      {
        Frage: "Warum hat der Informatiker immer eine Jacke dabei?",
        Antwort: "Weil er immer kalt gelötet ist.",
        Frage_key: "frage_1",
      },
      {
        Frage: "Warum haben Programmierer keine Zeit für einen Haarschnitt?",
        Antwort: "Weil sie sich ständig im Code verheddern.",
        Frage_key: "frage_2",
      },
      {
        Frage: "Warum war der Computer krank?",
        Antwort: "Weil er einen Virus hatte.",
        Frage_key: "frage_3",
      },
      {
        Frage: "Was sagt ein Informatiker, wenn er das Haus verlässt?",
        Antwort: "Logout.",
        Frage_key: "frage_4",
      },
      {
        Frage: "Warum wurde die Website verhaftet?",
        Antwort: "Sie hatte zu viele Back-End-Probleme.",
        Frage_key: "frage_5",
      },
    ],
  };

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return true when the answer is correct', () => {
    const result = isRightSolutionForQuestion('frage_1', 'Weil er immer kalt gelötet ist.');
    expect(result).toBe(true);
  });

  it('should return false when the answer is incorrect', () => {
    const result = isRightSolutionForQuestion('frage_2', 'wrong answer');
    expect(result).toBe(false);
  });

  it('should throw ReferenceError when no such question exists', () => {
    expect(() => {
      isRightSolutionForQuestion('nonExistentQuestion', 'some answer');
    }).toThrow(ReferenceError);
  });

  it('should throw TypeError when answer is not a string', () => {
    expect(() => {
      isRightSolutionForQuestion('frage_3', 123);
    }).toThrow(TypeError);
  });

  it('should log an error when answer is not a string', () => {
    isRightSolutionForQuestion('frage_4', 123);
    expect(console.error).toHaveBeenCalled();
  });
});
