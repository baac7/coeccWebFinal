import express from "express";
import mongoose from "mongoose";

import File from "../models/file.js";

export const getFile = async (req, res) => {
  try {
    const files = await File.find();

    res.status(200).json(files);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFile = async (req, res) => {
  const file = req.body;

  const newFile = new File({
    ...file,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newFile.save();

    res.status(201).json(newFile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateFile = async (req, res) => {
  const { id: _id } = req.params;
  const file = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No file with that id");

  const updatedFile = await File.findByIdAndUpdate(
    _id,
    { ...file, _id },
    { new: true }
  );

  res.json(updatedFile);
};

export const deleteFile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No file with that id!");

  await File.findByIdAndRemove(id);

  res.json({ message: "File deleted succesfully." });
};
