"use client";
import Card from "@/components/Card";
import EmployeeTable from "@/components/data/EmployeeTable";
import Button from "@/components/input/Button";
import { getEmployeeById } from "@/services/EmployeeServices";
import { Employee } from "@/types/Employee";
import { useRouter } from "next/navigation";
import { parse } from "path";
import React, { useEffect, useState } from "react";

type Props = {
  routeId: string;
};

const GetById: React.FC<Props> = ({ routeId }) => {
  const router = useRouter();
  const [employee, setEmployee] = useState<Employee | null>();
  const [error, setError] = useState<string | null>(null);

  const fetchEmployeeById = async (routeId: string) => {
    const parsedId = parseInt(routeId);
    if (parsedId) {
      setError(`Invalid route "${routeId}". Enter a valid number.`);
      return;
    }

    if (parsedId < 1) {
      setError(`Invalid route "${routeId}". Id starts from 1.`);
      return;
    }
    const res = await getEmployeeById(parsedId);

    if ("errorMessage" in res) {
      setError(`${res.code} - ${res.errorMessage}`);
    } else {
      setEmployee(res);
    }
  };

  useEffect(() => {
    fetchEmployeeById(routeId);
  }, []);

  let title;
  if (employee) {
    title = `${employee.firstName}'s Info`;
  } else {
    title = "Invalid Employee ID";
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-6">
      <Card
        title={title}
        hero={
          <div className="response">
            {employee ? (
              <EmployeeTable employees={[employee]} />
            ) : (
              error && (
                <div>
                  <p>Error Occured :(</p>
                  <p>{error}</p>
                </div>
              )
            )}
          </div>
        }
        footer={
          <Button title="Return" onClick={() => router.push("/employees")} />
        }
      />
    </div>
  );
};

export default GetById;
