import { FC, useState } from "react";

const FormCreatePost: FC = () => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFile(file);
  };

  const createPostSumbit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", content);
      if (file) {
        formData.append("img", file);
      }
      //   const post = await PostApiService.createPost(formData);
      //   console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <input type="file" accept="image/*" onChange={selectFile} />
        <button onClick={createPostSumbit}>Отправить</button>
      </form>
    </div>
  );
};

export { FormCreatePost };
