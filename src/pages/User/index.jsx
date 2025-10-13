import {useEffect} from "react"
import {DataTable} from "@pages/User/DataTable.jsx"
import {createColumnHelper} from "@tanstack/react-table"

import avatar1 from "@img/user/Avatar.webp"
import avatar2 from "@img/user/Avatar-1.webp"
import avatar3 from "@img/user/Avatar-2.webp"
import avatar4 from "@img/user/Avatar-3.webp"
import avatar5 from "@img/user/Avatar-4.webp"
import avatar6 from "@img/user/Avatar-5.webp"
import avatar7 from "@img/top-bar/Avatar.webp"

const columnHelper = createColumnHelper()

const data = [
    {
        name: "Jordan Stevenson",
        email: "susanna.Lind57@gmail.com",
        role: "Admin",
        plan: "Enterprise",
        status: "Pending",
        avatar: avatar1,
    },
    {
        name: "Benedetto Rossiter",
        email: "estelle.Bailey10@gmail.com",
        role: "Editor",
        plan: "Team",
        status: "Active",
        avatar: avatar7,
    },
    {
        name: "Bertie Emblin",
        email: "@emblinf",
        role: "Editor",
        plan: "Company",
        status: "Active",
        avatar: avatar2,
    },
    {
        name: "Bertha Biner",
        email: "lonnie13@hotmail.com",
        role: "Editor",
        plan: "Team",
        status: "Active",
        avatar: avatar3,
    },
    {
        name: "Beverlee Krabbe",
        email: "ahmad.Collins@yahoo.com",
        role: "Maintainer",
        plan: "Company",
        status: "Active",
        avatar: avatar4,
    },
    {
        name: "Bradon Rosebotham",
        email: "rosebotham82@hotmail.com",
        role: "Maintainer",
        plan: "Company",
        status: "Active",
        avatar: avatar5,
    },
    {
        name: "Bree Kildey",
        email: "otho12@gmail.com",
        role: "Editor",
        plan: "Team",
        status: "Active",
        avatar: avatar6,
    },
    {
        name: "Florence Melancon",
        email: "florencio.Little11@hotmail.com",
        role: "Maintainer",
        plan: "Company",
        status: "Inactive",
        avatar: avatar1,
    },
    {
        name: "Brockie Myles",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
        avatar: avatar7,
    },
    {
        name: "Brockie Myles II",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
        avatar: avatar2,
    },
    {
        name: "Brockie Myles III",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
        avatar: avatar3,
    },
    {
        name: "Brockie Myles IV",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
        avatar: avatar4,
    },
    {
        name: "Brockie Myles V",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
        avatar: avatar5,
    },
    {
        name: "Brockie Myles VI",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
        avatar: avatar6,
    },
    {
        name: "Brockie Myles VII",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
        avatar: avatar1,
    },
    {
        name: "Brockie Myles VIII",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
        avatar: avatar7,
    },
    {
        name: "Brockie Myles IX",
        email: "tamika.Dickens79@hotmail.com",
        role: "Maintainer",
        plan: "Basic",
        status: "Active",
        avatar: avatar2,
    },
]

const columns = [
    columnHelper.accessor("name", {
        header: "Name",
        cell: info => {
            const row = info.row.original
            return (
                <div className="flex items-center gap-2">
                    {row.avatar && (
                        <img
                            src={row.avatar}
                            alt={row.name}
                            className="w-6 h-6 rounded-full object-cover border border-gray-300"
                        />
                    )}
                    <span className="font-medium">{row.name}</span>
                </div>
            )
        },
    }),
    columnHelper.accessor("email", {
        header: "Email",
        cell: info => (
            <span className="text-sm text-muted-foreground">{info.getValue()}</span>
        ),
    }),
    columnHelper.accessor("role", {
        header: "Role",
        cell: info => (
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-700">
        {info.getValue()}
      </span>
        ),
    }),
    columnHelper.accessor("plan", {
        header: "Plan",
        cell: info => (
            <span className="text-xs text-gray-600">{info.getValue()}</span>
        ),
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
                        : "text-red-700 bg-red-100"
            return (
                <span
                    className={`text-xs font-medium rounded-full px-2 py-0.5 ${color}`}
                >
          {value}
        </span>
            )
        },
    }),
]

export default function User() {
    useEffect(() => {
        document.title = "Users | Dashboard"
    }, [])

    return <DataTable data={data} columns={columns}/>
}