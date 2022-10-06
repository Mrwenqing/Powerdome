import request from "../utils/request";

// 获取机构管理列表接口
const getDepartmentList = (data) => {
  return request({
    url: `/department/list`,
    method: "GET",
    data,
  });
};

// 删除机构管理列表接口
const DeleteDepartmentList = (id) => {
  return request({
    url: `/department/${id}`,
    method: "DELETE",
  });
};

export default {
  getDepartmentList,
  DeleteDepartmentList,
};
