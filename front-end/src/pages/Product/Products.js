import Table from '../../components/Table'
import { AddButton, TableOptions, DeleteButton } from '../../components/sub-components/Buttons'
import { ProductDialogFrom } from '../../components/CustomForms'
import { useContext, useMemo, useEffect, useState } from 'react'
import { Typography, Container, Divider } from '@material-ui/core'
import { DarkContext } from '../../reducers/context'
import { useQuery } from '@apollo/client'
import { LOAD_PRODUCTS } from '../../graphql/queries'
import { useOpen } from '../../hooks'

function createData(image, product, rating, quantity, bPrice, vPrice) {
    const benifits = parseFloat(vPrice) - parseFloat(bPrice);
    return [image, product, rating, quantity, vPrice, benifits.toFixed(2)];
}

const ProductTable = () => {
    const columns = ["Image", "Product", "Average Rating", "Quantity", "Price", "Benifits"];
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    const { error, laoding, data } = useQuery(LOAD_PRODUCTS)

    const rows = useMemo(() => {
        var tableRows = []
        if (data?.getProducts) {
            data.getProducts.map(product => {
                tableRows = [...tableRows, createData(
                    product.image,
                    product.name,
                    product.rating,
                    product.quantity,
                    product.priceAchat,
                    product.priceVender
                )]
            })
            console.log(tableRows)
            return tableRows
        }
        return tableRows
    }, [data])
    return (
        <Table columns={columns} style={{ width: "100%" }} rows={rows} options={options_} />
    )
}

export default function Products() {
    const { state } = useContext(DarkContext)
    const { handleClose, handleOpen, open } = useOpen()
    return (
        <Container>
            <Typography
                variant="h4"
                style={{
                    fontWeight: "bold",
                    color: state ? "#fff" : "#25265e",
                    paddingTop: "20px"
                }}>
                Manage Your Products
            </Typography>
            <Divider
                style={{
                    marginTop: "10px",
                    marginBottom: "30px",
                    backgroundColor: state ? "#f1f1f1" : "#25265e"
                }}
            />
            <div style={{ marginBottom: "10px" }}>
                <AddButton
                    open={open}
                    onClick={handleOpen}
                    title="Add Product"
                    style={{ marginRight: "100px" }}
                />
                <ProductDialogFrom handleClose={handleClose} open={open} />
                <DeleteButton content="Are you sure" title="Delete Product" />
            </div>
            <ProductTable />
        </Container>
    )
}