"use client";

import {useState, useEffect} from "react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@components/ui/table";

import Button from "@components/ui/Button";

export default function DataTable({columns, data}) {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const table = useReactTable({
        data,
        columns,
        state: {pagination},
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        autoResetPageIndex: false,
    });

    const pageIndex = table.getState().pagination.pageIndex
    const pageSize = table.getState().pagination.pageSize
    const totalRows = table.getFilteredRowModel().rows.length
    const pageCount = Math.ceil(totalRows / pageSize)

    useEffect(() => {
        if (pageIndex >= pageCount && pageCount > 0) setPagination(prev => ({...prev, pageIndex: pageCount - 1}));
    }, [pageIndex, pageCount]);

    const seen = Math.min((pageIndex + 1) * pageSize, totalRows);
    const canPrev = pageIndex > 0;
    const canNext = pageIndex + 1 < pageCount;

    return (
        <div className="main-components">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getPaginationRowModel().rows.length ? (
                        table.getPaginationRowModel().rows.map(row => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <div className="flex flex-col items-center justify-between gap-4 space-x-2 py-4 @lg/main:flex-row">
                <div className="space-x-4">
                    <Button
                        className="max-w-max"
                        onClick={() => {
                            if (pageIndex <= 0) return;
                            table.previousPage();
                        }}
                        disabled={!canPrev}
                        text="Previous"
                    />
                    <Button
                        className="max-w-max"
                        onClick={() => {
                            if (pageIndex + 1 >= pageCount) return;
                            table.nextPage();
                        }}
                        disabled={!canNext}
                        text="Next"
                    />
                </div>

                <div className="flex items-center gap-6 py-2 text-sm text-muted-foreground">
                    <div>
                        Page {pageIndex + 1} of {pageCount}
                    </div>
                    <div className="text-secondary-txt">
                        Showing {seen} of {totalRows} rows
                    </div>
                </div>
            </div>
        </div>
    );
};