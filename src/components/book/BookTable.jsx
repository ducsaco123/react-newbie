import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Space, Table } from "antd";
import { useState } from "react";
import { deleteBookAPI } from "../../services/api.service";
import UpdateBookModal from "./UpdateBookModal";
import ViewBookDetail from "./ViewBookDetail";

const BookTable = ({
  dataBooks,
  current,
  pageSize,
  total,
  setCurrent,
  setPageSize,
  fetchBooks,
}) => {
  const [selectBook, setSelectBook] = useState(null);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [openBookDetail, setOpenBookDetail] = useState(false);

  const onChange = (pagination) => {
    if (pagination && pagination.current && pagination.pageSize) {
      if (current !== pagination.current) {
        setCurrent(pagination.current);
      }
      if (pageSize !== pagination.pageSize) {
        setPageSize(pagination.pageSize);
      }
    }
  };

  const formatPrice = (price) => {
    const numericPrice = Number(price);

    if (Number.isNaN(numericPrice)) {
      return `${price} đ`;
    }

    return `${numericPrice.toLocaleString("vi-VN")} đ`;
  };

  const handleDeleteBook = async (_id) => {
    try {
      const res = await deleteBookAPI(_id);
      if (res.data) {
        notification.success({
          message: "Delete book success",
          description: "Xóa book thành công",
        });
      } else {
        notification.error({
          message: "Delete book failed",
          description: JSON.stringify(res.message),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1 + (current - 1) * pageSize}</>;
      },
    },
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={() => {
              setSelectBook(record);
              setOpenBookDetail(true);
            }}
          >
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Title",
      dataIndex: "mainText",
      key: "mainText",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) => {
        return <p>{formatPrice(record.price)}</p>;
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <EditOutlined
              style={{ cursor: "pointer", color: "orange" }}
              onClick={() => {
                setSelectBook(record);
                setIsModalUpdateOpen(true);
              }}
            />
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => handleDeleteBook(record._id)}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={dataBooks}
        columns={columns}
        rowKey="_id"
        pagination={{
          current,
          pageSize,
          showSizeChanger: true,
          total,
          showTotal: (totalValue, range) => {
            return (
              <div>
                {range[0]}-{range[1]} trên {totalValue} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />
      <UpdateBookModal
        selectBook={selectBook}
        setSelectBook={setSelectBook}
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        fetchBooks={fetchBooks}
      />
      <ViewBookDetail
        selectBook={selectBook}
        setSelectBook={setSelectBook}
        open={openBookDetail}
        setOpen={setOpenBookDetail}
      />
    </>
  );
};

export default BookTable;
