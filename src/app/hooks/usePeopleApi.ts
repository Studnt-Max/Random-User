'use client';

import { useEffect, useState } from "react";
import { Person } from "../components/http/person";
import { PeopleResponse } from "../components/http/api.response";
import axios from "axios";

export const usePeopleApi = () => {
    const [currentPerson, setPerson] = useState<Person | null>(null)
    const [currentHistory, setPersonHistory] = useState<Person[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData =  async () =>
    {
        setError(null)
        setLoading(true)
        try {
            const response = await axios.get<PeopleResponse>('http://randomuser.me/api/');
            const data = response.data.results[0]
            const person: Person = {
                name : data.name.first + " " + data.name.last,
                email : data.email,
                birthday : data.dob.date,
                phone: data.phone,
                password: data.login.password
            }
            setPerson(person)
            setPersonHistory((personList)=> [...personList, person])
        } catch (err) {
            setError(err instanceof Error ? err.message: 'An error occurred');
        }  finally {
            setLoading(false)
        }
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {currentPerson,currentHistory,loading,error,fetchData}
}