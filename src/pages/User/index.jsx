import {useEffect} from "react"
import {DataTable} from "@pages/User/DataTable.jsx"
import {createColumnHelper} from "@tanstack/react-table"

const columnHelper = createColumnHelper()

const data = [
    {
        name: "Jordan Stevenson",
        email: "susanna.Lind57@gmail.com",
        role: "Admin",
        plan: "Enterprise",
        status: "Pending",
    },
    {
        name: "Benedetto Rossiter",
        email: "estelle.Bailey10@gmail.com",
        role: "Editor",
        plan: "Team",
        status: "Active",
    },
    {
        name: "Bertie Emblin",
        email: "@emblinf",
        role: "Editor",
        plan: "Company",
        status: "Active",
    },
    {
        name: "Bertha Biner",
        email: "lonnie13@hotmail.com",
        role: "Editor",
        plan: "Team",
        status: "Active",
    },
    {
        name: "Beverlee Krabbe",
        email: "ahmad.Collins@yahoo.com",
        role: "Maintainer",
        plan: "Company",
        status: "Active",
    },
    {
        name: "Bradon Rosebotham",
        email: "rosebotham82@hotmail.com",
        role: "Maintainer",
        plan: "Company",
        status: "Active",
    },
    {
        name: "Bree Kildey",
        email: "otho12@gmail.com",
        role: "Editor",
        plan: "Team",
        status: "Active",
    },
    {
        name: "Florence Melancon",
        email: "florencio.Little11@hotmail.com",
        role: "Maintainer",
        plan: "Company",
        status: "Inactive",
    },
    {
        name: "Brockie Myles",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
    },
]

const columns = [
    columnHelper.accessor("name", {
        header: "Name",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor("email", {
        header: "Email",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor("role", {
        header: "Role",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor("plan", {
        header: "Plan",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor("status", {
        header: "Status",
        cell: info => {
            const value = info.getValue()
            const color =
                value === "Active"
                    ? "text-green-700 bg-green-100"
                    : value === "Pending"
                        ? "text-yellow-700 bg-yellow-100"
                        : "text-red-700 bg-red-100";
            return <span className={`text-xs font-light rounded-full px-1.5 py-0.5 ${color}`}>{value}</span>
        },
    }),
]

export default function User() {
    useEffect(() => {
        document.title = "Users | Dashboard"
    }, [])

    return <DataTable data={data} columns={columns}/>
}