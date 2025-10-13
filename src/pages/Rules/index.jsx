import {useEffect} from "react";

import {createColumnHelper} from "@tanstack/react-table"
import DataTable from "@components/ui/DataTable.jsx";

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor("name", {
        header: "Name",
        cell: info => <span className="font-medium">{info.getValue()}</span>,
    }),
    columnHelper.accessor("assignedTo", {
        header: "Assigned To",
        cell: info => (
            <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
                {info.getValue().map((role, i) => (
                    <span key={i}>{role}</span>
                ))}
            </div>
        ),
    }),
    columnHelper.accessor("createdDate", {
        header: "Created Date",
        cell: info => (
            <span className="text-xs text-gray-500">{info.getValue()}</span>
        ),
    }),
    columnHelper.accessor("actions", {
        header: "Action",
        cell: () => (
            <div className="flex items-center justify-end gap-4">
                <svg className={"size-6 cursor-pointer"}>
                    <use href="#trash-icon"></use>
                </svg>
                <svg className={"size-6 cursor-pointer"}>
                    <use href="#pencil-icon"></use>
                </svg>
            </div>
        ),
        enableSorting: false,
    }),
]

const data = [
    {
        name: "Management",
        assignedTo: ["Administrator"],
        createdDate: "14 Apr 2021, 8:43 PM",
        actions: ["edit", "delete"],
    },
    {
        name: "Manage Billing & Roles",
        assignedTo: ["Administrator"],
        createdDate: "28 Sep 2021, 5:20 PM",
        actions: ["edit", "delete"],
    },
    {
        name: "Add & Remove Users",
        assignedTo: ["Administrator", "Manager"],
        createdDate: "12 Oct 2021, 10:20 AM",
        actions: ["edit", "delete"],
    },
    {
        name: "Project Planning",
        assignedTo: ["Administrator", "User"],
        createdDate: "23 Oct 2021, 10:25 AM",
        actions: ["edit", "delete"],
    },
    {
        name: "Manage Email Campaigns",
        assignedTo: ["Administrator", "Support"],
        createdDate: "15 Aug 2021, 7:30 PM",
        actions: ["edit", "delete"],
    },
    {
        name: "Client Communication",
        assignedTo: ["Administrator", "Support"],
        createdDate: "23 Aug 2021, 11:30 AM",
        actions: ["edit", "delete"],
    },
    {
        name: "Only View",
        assignedTo: ["Administrator", "Restricted User"],
        createdDate: "02 Dec 2021, 8:15 PM",
        actions: ["edit", "delete"],
    },
    {
        name: "Financial Management",
        assignedTo: ["Administrator"],
        createdDate: "25 Nov 2021, 7:00 AM",
        actions: ["edit", "delete"],
    },
    {
        name: "Manage Others' Tasks",
        assignedTo: ["Administrator", "Support"],
        createdDate: "04 Nov 2021, 11:45 AM",
        actions: ["edit", "delete"],
    },
]

export default function Rules() {
    useEffect(() => {
        document.title = 'Rules & Permissions | Dashboard';
    }, [])

    return (
        <section>
            <DataTable data={data} columns={columns}/>
        </section>
    )
}
