export const RequestHandler = async (request) => {
  const { input } = request.query;
  let result;
  try {
    result = evaluateExpression(input);
  } catch (error) {
    console.error("Error calculating input:", error.message);
  }
};

export const evaluateExpression = (input) => {
  const safeEval = (value) => Function("return (" + value + ")")();
  return safeEval(input);
};
