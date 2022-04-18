export const useContentFieldFormCreatePost = (content: string) => {
  const permissibleCountWords = 280;
  const totalCountWordsInContentField = content.length;
  const totalCountWordsInContentFieldInPrecent = Math.round(
    (totalCountWordsInContentField / permissibleCountWords) * 100
  );
  const isWordLimitExceeded =
    totalCountWordsInContentField > permissibleCountWords;

  return {
    permissibleCountWords,
    totalCountWordsInContentField,
    totalCountWordsInContentFieldInPrecent,
    isWordLimitExceeded,
  };
};
