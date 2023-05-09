import { Employee } from "@/types/Employee";
import { ErrorResponse } from "@/types/ErrorResponse";

type QueryParams = {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
};

type PostFields = {
  firstName: string;
  lastName: string;
  email: string;
};

export type PatchData = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

type PatchFields = {
  patchData: PatchData;
  employeeId: number;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPatchedEmployee: (employee: Employee | null) => void;
  setError: (error: string) => void;
};

const getAllEmployees = async (queryParams: QueryParams) => {
  const { pageNumber, pageSize, sortBy, sortDirection } = queryParams;

  let url = "http://localhost:3030/api/employees";

  const params = new URLSearchParams();
  if (pageNumber) {
    params.append("page", pageNumber.toString());
  }
  if (pageSize) {
    params.append("size", pageSize.toString());
  }
  if (sortBy) {
    if (sortDirection) {
      params.append("sort", `${sortBy},${sortDirection}`);
    } else {
      params.append("sort", sortBy);
    }
  }

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const res = await fetch(url, { cache: "no-store" });

  return res.json();
};

const getEmployeeById = async (id: number) => {
  const url = `http://localhost:3030/api/employees/${id}`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
};

const postEmployee = async (postFields: PostFields) => {
  const url = `http://localhost:3030/api/employees`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postFields),
    cache: "no-store",
  });

  return res.json();
};

const patchEmployee = async (patchFields: PatchFields) => {
  const {
    patchData,
    employeeId,
    setFirstName,
    setLastName,
    setEmail,
    setPatchedEmployee,
    setError,
  } = patchFields;

  const url = `http://localhost:3030/api/employees/${employeeId}`;
  fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patchData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        setPatchedEmployee(null);
        throw new Error("Error patching employee");
      }
    })
    .then((data) => {
      console.log(data);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPatchedEmployee(data);
    })
    .catch((err) => {
      console.log(err);

      setError(err.message);
    });
};

const deleteEmployee = async (
  id: number,
  setEmployeeId: (employeeId: number) => void,
  setemployeeFound: (employeeFound: boolean) => void
) => {
  const url = `http://localhost:3030/api/employees/${id}`;
  fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  })
    .then((response) => {
      if (response.status === 204) {
        setemployeeFound(true);
        return response.json();
      } else {
        setemployeeFound(false);
        throw new Error("Error deleting employee");
      }
    })
    .then((data) => {
      console.log(data);
      setEmployeeId(0);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export {
  getAllEmployees,
  getEmployeeById,
  postEmployee,
  patchEmployee,
  deleteEmployee,
};
