import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { SelectField, TextField, TextAreaField, Button, Autocomplete } from "@aws-amplify/ui-react";
import client from "@/src/client"; // Adjust import based on your project structure

const data = client.models;

interface FormData {
  title: string;
  description: string;
  content: string;
  categoryId: string;
  selectedTags: { id: string; label: string }[];
  status: "PUBLISHED" | "DELETED" | "DRAFTED";
}

const PostForm: React.FC = () => {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [tags, setTags] = useState<{ id: string; name: string }[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    content: "",
    categoryId: "",
    selectedTags: [],
    status: "DRAFTED",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await data.Category.list();
      const fetchedTags = await data.Tag.list();
      setCategories(fetchedCategories.data);
      setTags(fetchedTags.data);
    };
    fetchData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await data.Post.create({
        postId: crypto.randomUUID(), // Ensure a unique ID
        title: formData.title,
        description: formData.description,
        content: formData.content,
        categoryId: formData.categoryId,
        authorId: "some-author-id", // Replace with actual author logic
        status: formData.status,
        tags: formData.selectedTags.map((tag) => ({ tagId: tag.id })),
        keywords: formData.title.split(" "),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      alert("Post created successfully");
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="title" label="Title" onChange={handleChange} required />
      <TextAreaField name="description" label="Description" onChange={handleChange} />
      <TextAreaField name="content" label="Content" onChange={handleChange} required />

      <SelectField name="categoryId" label="Category" onChange={handleChange} required>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </SelectField>

      <Autocomplete
        label="Tags"
        options={tags.map(tag => ({ id: tag.id, label: tag.name }))}
        onSelectionChange={(selected: { id: string; label: string }[]) => setFormData({ ...formData, selectedTags: selected })}
        multiple
      />

      <SelectField name="status" label="Status" onChange={handleChange} required>
        <option value="PUBLISHED">Published</option>
        <option value="DELETED">Deleted</option>
        <option value="DRAFTED">Drafted</option>
      </SelectField>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default PostForm;