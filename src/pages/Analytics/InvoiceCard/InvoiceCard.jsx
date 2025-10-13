export default function InvoiceCard() {
    return (
        <section className="main-components text-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b pb-4">
                <div className="flex items-center gap-2">
                    <svg className="w-8 h-6">
                        <use href="#logo-icon"></use>
                    </svg>
                    <strong className="tracking-wide">MATERIAL</strong>
                </div>
                <p className="md:text-lg font-medium">Invoice #3492</p>
            </div>

            {/* Sender & Recipient */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="font-semibold mb-2">From:</h3>
                    <div>
                        <p className="text-secondary-txt">Office 149, 450 South Brand Brooklyn</p>
                        <p className="text-secondary-txt">San Diego County, CA 91905, USA</p>
                        <p className="text-secondary-txt">+1 (123) 456 7891</p>
                        <p className="text-secondary-txt">+44 (876) 543 2198</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">To:</h3>
                    <p className="text-secondary-txt">Tommy Shelby</p>
                    <p className="text-secondary-txt">Shelby Company Limited</p>
                    <p className="text-secondary-txt">Small Heath, B10 DMF, UK</p>
                    <p className="text-secondary-txt">+798-986-8062</p>
                    <p className="text-secondary-txt">peaky@blinders.com</p>
                </div>
            </div>

            {/* Bank Details */}
            <div className="mb-8">
                <h3 className="font-semibold mb-2">Bank Details:</h3>
                <p className="text-secondary-txt">Bank: United Bank</p>
                <p className="text-secondary-txt">IBAN: E794526213874685</p>
                <p className="text-secondary-txt">SWIFT Code: ER18905</p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-disable-txt mb-8">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-primary-bg text-sm uppercase tracking-wide">
                    <tr>
                        <th className="py-3 px-4">Service</th>
                        <th className=" @2xl:table-cell px-4">Description</th>
                        <th className="px-4">Hours</th>
                        <th className="px-4">Unit</th>
                        <th className="px-4">Total</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {[
                        { name: "Premium Branding Package", desc: "Branding & promotion", hours: 48, cost: 1, total: 48 },
                        { name: "Social Media", desc: "Social media marketing", hours: 42, cost: 1, total: 42 },
                        { name: "Web Design", desc: "Web designing package", hours: 14, cost: 2, total: 28 },
                        { name: "SEO", desc: "Search engine optimization", hours: 10, cost: 2.2, total: 22 },
                    ].map((item, i) => (
                        <tr key={i} className="hover:bg-disable-txt transition-colors">
                            <td className="py-3 px-4 font-medium">{item.name}</td>
                            <td className=" @2xl:table-cell px-4 text-secondary-txt">{item.desc}</td>
                            <td className="px-4">{item.hours}</td>
                            <td className="px-4">${item.cost}</td>
                            <td className="px-4 font-semibold">${item.total}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Summary */}
            <div className="flex justify-between flex-col md:flex-row md:items-center mb-8">
                <div className="mb-4 md:mb-0">
                    <p className="text-secondary-txt">Salesperson: <span className="font-semibold">Tommy Shelby</span></p>
                </div>
                <div className="bg-primary-bg p-4 rounded-xl w-full md:w-1/3">
                    <p className="flex justify-between"><span>Subtotal:</span><span>$180</span></p>
                    <p className="flex justify-between"><span>Discount:</span><span>$2</span></p>
                    <p className="flex justify-between"><span>Tax:</span><span>$2</span></p>
                    <p className="flex justify-between font-bold text-lg border-t border-gray-200 mt-2 pt-2"><span>Total:</span><span>$180</span></p>
                </div>
            </div>

            {/* Note */}
            <div className="bg-primary-bg border border-disable-txt p-4 rounded-xl mb-8 text-secondary-txt">
                <p>
                    Thanks for your business. It was a pleasure working with you and your team.
                    We hope you will keep us in mind for future projects!
                </p>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
                <button className="px-5 py-2.5 rounded-lg bg-violet-600 text-white hover:bg-violet-700 shadow-sm transition-all">
                    PRINT
                </button>
                <button className="px-5 py-2.5 rounded-lg bg-sky-500 text-white hover:bg-sky-600 shadow-sm transition-all">
                    DOWNLOAD
                </button>
            </div>
        </section>
    );
}
