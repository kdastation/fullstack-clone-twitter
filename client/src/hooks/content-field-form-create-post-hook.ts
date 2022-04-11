export const useContentFieldFormCreatePost = (content: string | undefined) => {
  const permissibleCountWords = 280;
  const totalCountWordsInContentField = content?.length || 0;
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
