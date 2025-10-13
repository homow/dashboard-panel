export default function InvoiceCard() {
    return (
        <section className="main-components text-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <div className={"flex items-center gap-2"}>
                    <svg className={"w-8 h-6"}>
                        <use href="#logo-icon"></use>
                    </svg>
                    <strong>MATERIAL</strong>
                </div>
                <h2 className="text-xl font-medium">Invoice #3492</h2>
            </div>

            {/* Sender & Recipient */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <h3 className="font-medium mb-1">From:</h3>
                    <p className={"text-secondary-txt"}>Office 149, 450 South Brand Brooklyn</p>
                    <p className={"text-secondary-txt"}>San Diego County, CA 91905, USA</p>
                    <p className={"text-secondary-txt"}>+1 (123) 456 7891</p>
                    <p className={"text-secondary-txt"}>+44 (876) 543 2198</p>
                </div>
                <div>
                    <h3 className="font-medium mb-1">To:</h3>
                    <p className={"text-secondary-txt"}>Tommy Shelby</p>
                    <p className={"text-secondary-txt"}>Shelby Company Limited</p>
                    <p className={"text-secondary-txt"}>Small Heath, B10 DMF, UK</p>
                    <p className={"text-secondary-txt"}>+798-986-8062</p>
                    <p className={"text-secondary-txt"}>peaky@blinders.com</p>
                </div>
            </div>

            {/* Bank Details */}
            <div className="mb-6">
                <h3 className="font-medium mb-1">Bank Details:</h3>
                <p className={"text-secondary-txt"}>Bank: United Bank</p>
                <p className={"text-secondary-txt"}>IBAN: E794526213874685</p>
                <p className={"text-secondary-txt"}>SWIFT Code: ER18905</p>
            </div>

            <table className="w-full text-left border-t border-b border-disable-txt mb-6">
                <thead>
                <tr className="text-secondary-txt">
                    <th className="py-2">Service</th>
                    <th className={"hidden @2xl:inline"}>Description</th>
                    <th>Hours</th>
                    <th>Unit</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {[
                    {name: "Premium Branding Package", desc: "Branding & promotion", hours: 48, cost: 1, total: 48},
                    {name: "Social Media", desc: "Social media marketing", hours: 42, cost: 1, total: 42},
                    {name: "Web Design", desc: "Web designing package", hours: 14, cost: 2, total: 28},
                    {name: "SEO", desc: "Search engine optimization", hours: 10, cost: 2.2, total: 22},
                ].map((item, i) => (
                    <tr key={i} className="border-t border-gray-200">
                        <td className="py-2">{item.name}</td>
                        <td className={"hidden @2xl:inline"}>{item.desc}</td>
                        <td>{item.hours}</td>
                        <td>${item.cost}</td>
                        <td>${item.total}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Summary */}
            <div className="mb-6">
                <p>Salesperson: <span className="font-semibold">Tommy Shelby</span></p>
                <p>Subtotal: $180</p>
                <p>Discount: $2</p>
                <p>Tax: $2</p>
                <p className="text-lg font-bold">Total Amount: $180</p>
            </div>

            {/* Note */}
            <div className="bg-gray-50 p-4 rounded mb-6 text-gray-700">
                <p>
                    Thanks for your business. It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank you!
                </p>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4">
                <button className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-700 transition-all">PRINT</button>
                <button className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-700 transition-all">DOWNLOAD</button>
            </div>
        </section>
    );
}