<template>
  <div class="middle-sidebar-left">
    <div class="middle-wrap">
      <div class="card w-100 border-0 bg-white shadow-xs p-0 mb-4">

          <div class="row">


            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Files</h4>
                  </div>
                  <div class="iq-card-header-toolbar d-flex align-items-center">
                    <div class="dropdown">
                                 <span class="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                                 <i class="ri-more-2-fill"></i>
                                 </span>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                        <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                        <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                        <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                        <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                        <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="iq-card-body">
                  <div class="table-responsive">
                    <div class="row justify-content-between">
                      <div class="col-sm-12 col-md-6">
                        <div id="user_list_datatable_info" class="dataTables_filter">
                          <form class="mr-3 position-relative">
                            <div class="form-group mb-0">
                              <input type="search" class="form-control" id="exampleInputSearch" placeholder="Search">
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <div class="user-list-files d-flex float-right">
                          <a href="javascript:void();" class="chat-icon-phone btn iq-bg-primary">
                            Print
                          </a>
                          <a href="javascript:void();" class="chat-icon-video btn iq-bg-primary">
                            Excel
                          </a>
                          <a href="javascript:void();" class="chat-icon-delete btn iq-bg-primary">
                            Pdf
                          </a>
                        </div>
                      </div>
                    </div>
                    <table class="files-lists table table-striped mt-4">
                      <thead>
                      <tr>
                        <th scope="col">
                          <div class="checkbox text-center">
                            <input type="checkbox" class="checkbox-input">
                          </div>
                        </th>
                        <th scope="col">File Name</th>
                        <th scope="col">File Type</th>
                        <th scope="col">Date</th>
                        <th scope="col">Size</th>
                        <th scope="col">Author</th>
                        <th scope="col">Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          <div class="checkbox text-center">
                            <input type="checkbox" class="checkbox-input">
                          </div>
                        </td>
                        <td>
                          <img class="rounded-circle img-fluid avatar-40 mr-2" src="../assets/images/SocialV/page-img/43.png" alt="profile"> post report
                        </td>
                        <td>Document</td>
                        <td>
                          Mar 12, 2020
                        </td>
                        <td>390 kb</td>
                        <td>
                          Anna Sthesia
                        </td>
                        <td>
                          <div class="flex align-items-center list-user-action">
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#"><i class="ri-download-line"></i></a>
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox text-center">
                            <input type="checkbox" class="checkbox-input">
                          </div>
                        </td>
                        <td>
                          <img class="rounded-circle img-fluid avatar-40 mr-2" src="../assets/images/SocialV/page-img/44.png" alt="profile"> usages
                        </td>
                        <td>Document</td>
                        <td>
                          Mar 18, 2020
                        </td>
                        <td>600 kb</td>
                        <td>
                          Paul Molive
                        </td>
                        <td>
                          <div class="flex align-items-center list-user-action">
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#"><i class="ri-download-line"></i></a>
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox text-center">
                            <input type="checkbox" class="checkbox-input">
                          </div>
                        </td>
                        <td>
                          <img class="rounded-circle img-fluid avatar-40 mr-2" src="../assets/images/SocialV/page-img/45.png" alt="profile"> Images file
                        </td>
                        <td>Slide</td>
                        <td>
                          Mar 19, 2020
                        </td>
                        <td>800 kb</td>
                        <td>
                          Bob Frapples
                        </td>
                        <td>
                          <div class="flex align-items-center list-user-action">
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#"><i class="ri-download-line"></i></a>
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox text-center">
                            <input type="checkbox" class="checkbox-input">
                          </div>
                        </td>
                        <td>
                          <img class="rounded-circle img-fluid avatar-40 mr-2" src="../assets/images/SocialV/page-img/46.png" alt="profile"> total comments
                        </td>
                        <td>Document</td>
                        <td>
                          Mar 21, 2020
                        </td>
                        <td>500 kb</td>
                        <td>
                          Barb Ackue
                        </td>
                        <td>
                          <div class="flex align-items-center list-user-action">
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#"><i class="ri-download-line"></i></a>
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox text-center">
                            <input type="checkbox" class="checkbox-input">
                          </div>
                        </td>
                        <td>
                          <img class="rounded-circle img-fluid avatar-40 mr-2" src="../assets/images/SocialV/page-img/47.png" alt="profile"> popular events
                        </td>
                        <td>Pdf</td>
                        <td>
                          Mar 24, 2020
                        </td>
                        <td>320 kb</td>
                        <td>
                          Barb Ackue
                        </td>
                        <td>
                          <div class="flex align-items-center list-user-action">
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#"><i class="ri-download-line"></i></a>
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox text-center">
                            <input type="checkbox" class="checkbox-input">
                          </div>
                        </td>
                        <td>
                          <img class="rounded-circle img-fluid avatar-40 mr-2" src="../assets/images/SocialV/page-img/43.png" alt="profile"> todo list
                        </td>
                        <td>excel</td>
                        <td>
                          Mar 28, 2020
                        </td>
                        <td>600 kb</td>
                        <td>
                          Ira Membrit
                        </td>
                        <td>
                          <div class="flex align-items-center list-user-action">
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#"><i class="ri-download-line"></i></a>
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox text-center">
                            <input type="checkbox" class="checkbox-input">
                          </div>
                        </td>
                        <td>
                          <img class="rounded-circle img-fluid avatar-40 mr-2" src="../assets/images/SocialV/page-img/45.png" alt="profile"> music list
                        </td>
                        <td>pdf</td>
                        <td>
                          Mar 30, 2020
                        </td>
                        <td>900 kb</td>
                        <td>
                          Pete Sariya
                        </td>
                        <td>
                          <div class="flex align-items-center list-user-action">
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#"><i class="ri-download-line"></i></a>
                            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>


          </div>


      </div>

    </div>
  </div>
</template>


<script>
import {useStore} from "vuex"

export default {
  name: "File",
  mounted() {
    // alert(this.$menuId);
    // useStore().state.menuId = 10;
    useStore().commit("SET_MENU_ID",2)
  },
};
</script>

<style scoped>

/*@import "../assets/css/SocialV/bootstrap.min.css";*/
/*@import "../assets/css/SocialV/responsive.css";*/
/*@import "../assets/css/SocialV/style2.css";*/

/*@import "../assets/css/SocialV/typography.css";*/

</style>