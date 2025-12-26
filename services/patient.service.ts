import api from "./api";
import { CreatePatientInput } from "@/schemas/patient.schema";

export const patientService = {
  getAll: async () => {
    const res = await api.get("/patients");
    return res.data;
  },

  create: async (data: CreatePatientInput) => {
    const res = await api.post("/patients", data);
    return res.data;
  },
};
