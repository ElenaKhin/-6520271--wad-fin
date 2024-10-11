  
export async function PUT(req, { params }) {
    const { id } = params;
    const body = await req.json();
    const customerId = parseInt(id);

    const index = customers.findIndex((c) => c.id === customerId);
    if (index !== -1) {
        customers[index] = { ...customers[index], ...body };
        return new Response(JSON.stringify(customers[index]), { status: 200 });
    } else {
        return new Response(JSON.stringify({ message: 'Customer not found' }), { status: 404 });
    }
}

export async function DELETE(req, { params }) {
    const { id } = params;
    const customerId = parseInt(id);
    customers = customers.filter((customer) => customer.id !== customerId);
    return new Response(null, { status: 204 });
}
