var ou = {};
(function () {

    $(function () {
        var l = abp.localization.getResource('AbpIdentity');

        var _organizationUnitService = volo.abp.identity.organizationUnit;
        var _editModal = new abp.ModalManager(abp.appPath + 'Identity/OrganizationUnits/EditModal');
        var _createModal = new abp.ModalManager(abp.appPath + 'Identity/OrganizationUnits/CreateModal');
        var _addMemberModal = new abp.ModalManager({
            viewUrl: abp.appPath + 'Identity/OrganizationUnits/AddMemberModal',
            modalClass: 'AddMemberModalManagement'
        });
        var _addRoleModal = new abp.ModalManager({
            viewUrl: abp.appPath + 'Identity/OrganizationUnits/AddRoleModal',
            modalClass: 'AddRoleModalManagement'
        });

        var _entityTypeFullName = 'Abp.Organizations.OrganizationUnit';

        var _permissions = {
            manageOrganizationTree: abp.auth.isAnyGranted("AbpIdentity.OrganizationUnits"),
            manageMembers: abp.auth.isAnyGranted('AbpIdentity.OrganizationUnits.ManageMembers'),
            manageRoles: abp.auth.isAnyGranted('AbpIdentity.OrganizationUnits.ManageRoles')
        };

        function entityHistoryIsEnabled() {
            return false;
        }

        var organizationTree = {

            $tree: $('#OrganizationUnitEditTree'),

            $emptyInfo: $('#OrganizationUnitTreeEmptyInfo'),

            show: function () {
                organizationTree.$emptyInfo.hide();
                organizationTree.$tree.show();
            },

            hide: function () {
                organizationTree.$emptyInfo.show();
                organizationTree.$tree.hide();
            },

            unitCount: 0,

            setUnitCount: function (unitCount) {
                organizationTree.unitCount = unitCount;
                if (unitCount) {
                    organizationTree.show();
                } else {
                    organizationTree.hide();
                }
            },

            refreshUnitCount: function () {
                organizationTree.setUnitCount(organizationTree.$tree.jstree('get_json').length);
            },

            selectedOu: {
                id: null,
                displayName: null,
                code: null,

                set: function (ouInTree) {
                    if (!ouInTree) {
                        organizationTree.selectedOu.id = null;
                        organizationTree.selectedOu.displayName = null;
                        organizationTree.selectedOu.code = null;
                    } else {
                        organizationTree.selectedOu.id = ouInTree.id;
                        organizationTree.selectedOu.displayName = ouInTree.original.displayName;
                        organizationTree.selectedOu.code = ouInTree.original.code;
                    }

                    ou.checkbox.setSelectedOu({
                        id: organizationTree.selectedOu.id,
                        displayName: organizationTree.selectedOu.displayName,
                        code: organizationTree.selectedOu.code,
                    });
                    members.load();
                    roles.load();
                }
            },

            contextMenu: function (node) {
                var items = {
                    editUnit: {
                        label: l('Edit'),
                        icon: 'la la-pencil',
                        _disabled: !_permissions.manageOrganizationTree,
                        action: function (data) {
                            var instance = $.jstree.reference(data.reference);

                            _editModal.open({
                                id: node.id
                            });
                        }
                    },

                    addSubUnit: {
                        label: l('AddSubUnit'),
                        icon: 'la la-plus',
                        _disabled: !_permissions.manageOrganizationTree,
                        action: function () {
                            organizationTree.addUnit(node.id);
                        }
                    },

                    addMember: {
                        label: l('AddMember'),
                        icon: 'la la-user-plus',
                        _disabled: !_permissions.manageMembers,
                        action: function () {
                            members.openAddModal();
                        }
                    },

                    addRole: {
                        label: l('AddRole'),
                        icon: 'la la-user-plus',
                        _disabled: !_permissions.manageRoles,
                        action: function () {
                            roles.openAddModal();
                        }
                    },

                    'delete': {
                        label: l("Delete"),
                        icon: 'la la-remove',
                        _disabled: !_permissions.manageOrganizationTree,
                        action: function (data) {
                            var instance = $.jstree.reference(data.reference);

                            abp.message.confirm(
                                l('OrganizationUnitDeletionConfirmationMessage', node.original.displayName),
                                l('AreYouSure'),
                                function (isConfirmed) {
                                    if (isConfirmed) {
                                        _organizationUnitService.delete(
                                            node.id
                                        ).done(function () {
                                            instance.delete_node(node);
                                            organizationTree.refreshUnitCount();
                                        }).fail(function (err) {
                                            setTimeout(function () {
                                                abp.message.error(err.message);
                                            }, 500);
                                        });
                                    }
                                }
                            );
                        }
                    }
                };

                if (entityHistoryIsEnabled()) {
                    items.history = {
                        label: l('History'),
                        icon: 'la la-history',
                        _disabled: !_permissions.manageOrganizationTree,
                        action: function () {
                            _entityTypeHistoryModal.open({
                                entityTypeFullName: _entityTypeFullName,
                                entityId: node.original.id,
                                entityTypeDescription: node.original.displayName
                            });
                        }
                    };
                }

                return items;
            },

            addUnit: function (parentId) {
                var instance = $.jstree.reference(organizationTree.$tree);

                _createModal.open({
                    parentId: parentId,
                }, function (newOu) {
                    instance.create_node(
                        parentId ? instance.get_node(parentId) : '#',
                        {
                            id: newOu.id,
                            parent: newOu.parentId ? newOu.parentId : '#',
                            code: newOu.code,
                            displayName: newOu.displayName,
                            memberCount: 0,
                            roleCount: 0,
                            text: organizationTree.generateTextOnTree(newOu),
                            state: {
                                opened: true
                            }
                        });

                    organizationTree.refreshUnitCount();
                });
            },

            generateTextOnTree: function (ou) {
                var itemClass = (ou.memberCount > 0 || ou.roleCount) ? ' ou-text-has-members' : ' ou-text-no-members';
                return '<span title="' + ou.code + '" class="ou-text text-dark' + itemClass + '" data-ou-id="' + ou.id + '">' +
                    //app.htmlUtils.htmlEncodeText(ou.displayName) +
                    ou.displayName +
                    ' <i class="fa fa-caret-down text-muted"></i> ' +
                    //' <span style="font-size: .82em; opacity: .5;">' +
                    //'<span class="ou-text-member-count ml-2">' + ou.memberCount + ' ' + l('Members') +
                    //' ,</span> <span class="ou-text-role-count ml-1">' + ou.roleCount + ' ' + l('Roles') +
                    //'</span></span>'+
                    '</span > ';
            },

            incrementMemberCount: function (ouId, incrementAmount) {
                var treeNode = organizationTree.$tree.jstree('get_node', ouId);
                treeNode.original.memberCount = treeNode.original.memberCount + incrementAmount;
                organizationTree.$tree.jstree('rename_node', treeNode, organizationTree.generateTextOnTree(treeNode.original));
            },

            incrementRoleCount: function (ouId, incrementAmount) {
                var treeNode = organizationTree.$tree.jstree('get_node', ouId);
                treeNode.original.roleCount = treeNode.original.roleCount + incrementAmount;
                organizationTree.$tree.jstree('rename_node', treeNode, organizationTree.generateTextOnTree(treeNode.original));
            },

            getTreeDataFromServer: function (callback) {
                _organizationUnitService.getListAll().done(function (result) {
                    var treeData = _.map(result.items, function (item) {
                        return {
                            id: item.id,
                            parent: item.parentId ? item.parentId : '#',
                            code: item.code,
                            displayName: item.displayName,
                            memberCount: item.memberCount,
                            roleCount: item.roleCount,
                            text: organizationTree.generateTextOnTree(item),
                            state: {
                                opened: true
                            }
                        };
                    });

                    callback(treeData);
                });
            },

            init: function () {
                organizationTree.getTreeDataFromServer(function (treeData) {

                    organizationTree.setUnitCount(treeData.length);

                    organizationTree.$tree
                        .on('changed.jstree', function (e, data) {
                            if (data.selected.length != 1) {
                                organizationTree.selectedOu.set(null);
                            } else {
                                var selectedNode = data.instance.get_node(data.selected[0]);
                                organizationTree.selectedOu.set(selectedNode);
                            }
                        })
                        .on('move_node.jstree', function (e, data) {

                            var parentNodeName = (!data.parent || data.parent == '#')
                                ? l('Root')
                                : organizationTree.$tree.jstree('get_node', data.parent).original.displayName;

                            abp.message.confirm(
                                l('OrganizationUnitMoveConfirmMessage', data.node.original.displayName, parentNodeName),
                                l('AreYouSure'),
                                function (isConfirmed) {
                                    if (isConfirmed) {
                                        _organizationUnitService.move(data.node.id, {
                                            newParentId: data.parent === '#' ? null : data.parent
                                        }).done(function () {
                                            //abp.notify.success(l('SuccessfullyMoved'));
                                            organizationTree.reload();
                                        }).fail(function (err) {
                                            organizationTree.$tree.jstree('refresh'); //rollback
                                            setTimeout(function () {
                                                abp.message.error(err.message);
                                            }, 500);
                                        });
                                    } else {
                                        organizationTree.$tree.jstree('refresh'); //rollback
                                    }
                                }
                            );
                        })
                        .jstree({
                            'core': {
                                data: treeData,
                                multiple: false,
                                check_callback: function (operation, node, node_parent, node_position, more) {
                                    return true;
                                }
                            },
                            //types: {
                            //    "default": {
                            //        "icon": "fa fa-folder text-info"
                            //    },
                            //    "file": {
                            //        "icon": "fa fa-file text-info"
                            //    }
                            //},
                            contextmenu: {
                                items: organizationTree.contextMenu,
                                'select_node': false,
                            },
                            sort: function (node1, node2) {
                                if (this.get_node(node2).original.displayName < this.get_node(node1).original.displayName) {
                                    return 1;
                                }

                                return -1;
                            },
                            plugins: [
                                'types',
                                'contextmenu',
                                'wholerow',
                                'sort',
                                'dnd'
                            ]
                        });

                    $('button[name=CreateOrganizationUnit]').click(function (e) {
                        e.preventDefault();
                        _createModal.open();
                    });

                    _createModal.onResult(function () {
                        organizationTree.reload();
                    });

                    _editModal.onResult(function (ou) {
                        organizationTree.reload();
                    });

                    organizationTree.$tree.on('click', '.ou-text .fa-caret-down', function (e) {
                        e.preventDefault();

                        var ouId = $(this).closest('.ou-text').attr('data-ou-id');
                        setTimeout(function () {
                            organizationTree.$tree.jstree('show_contextmenu', ouId);
                        }, 100);
                    });
                });
            },

            reload: function () {
                organizationTree.getTreeDataFromServer(function (treeData) {
                    organizationTree.setUnitCount(treeData.length);
                    organizationTree.$tree.jstree(true).settings.core.data = treeData;
                    organizationTree.$tree.jstree('refresh');
                });
            }
        };

        var members = {
            $table: $('#OuMembersTable'),
            $emptyInfo: $('#OuMembersEmptyInfo'),
            $addUserToOuButton: $('#AddUserToOuButton'),
            $selectedOuRightTitle: $('#SelectedOuRightTitle'),
            dataTable: null,

            showTable: function () {
                members.$emptyInfo.hide();
                members.$table.show();
                members.$addUserToOuButton.show();
                members.$selectedOuRightTitle.text(organizationTree.selectedOu.displayName).show();
            },

            hideTable: function () {
                members.$selectedOuRightTitle.hide();
                members.$addUserToOuButton.hide();
                members.$table.hide();
                members.$emptyInfo.show();
            },

            load: function () {
                if (!organizationTree.selectedOu.id) {
                    members.hideTable();
                    return;
                }

                members.showTable();
                this.dataTable.ajax.reload();
            },

            add: function (users) {
                var ouId = organizationTree.selectedOu.id;
                if (!ouId) {
                    return;
                }

                _organizationUnitService.addMembers(
                    ouId, {userIds: users}
                ).done(function () {
                    members.load();
                });
            },

            remove: function (user) {
                var ouId = organizationTree.selectedOu.id;
                if (!ouId) {
                    return;
                }

                abp.message.confirm(
                    l('RemoveUserFromOuWarningMessage',
                        user.userName,
                        organizationTree.selectedOu.displayName),
                    l('AreYouSure'),
                    function (isConfirmed) {
                        if (isConfirmed) {
                            _organizationUnitService.removeMember(ouId, user.id).done(function () {
                                members.load();
                            });
                        }
                    }
                );
            },

            openAddModal: function () {
                var ouId = organizationTree.selectedOu.id;
                if (!ouId) {
                    return;
                }
                _addMemberModal.open({
                        title: l('SelectAUser'),
                        organizationUnitId: ouId
                    },
                    function (selectedItems) {
                        members.add(selectedItems);
                    });
            },

            loadDatatable: function () {
                members.dataTable = $('#OuMembersTable table').DataTable(abp.libs.datatables.normalizeConfiguration({
                    order: [[1, "asc"]],
                    processing: true,
                    serverSide: true,
                    scrollX: true,
                    paging: true,
                    ajax: abp.libs.datatables.createAjax(function () {
                        return _organizationUnitService.getMembers(organizationTree.selectedOu.id, {});
                    }),
                    columnDefs: abp.ui.extensions.tableColumns.get("identity.user").columns.toArray()
                }));
            },

            init: function () {
                abp.ui.extensions.tableColumns.get("identity.user").addContributor(
                    function (columnList) {
                        columnList.addManyTail(
                            [
                                {
                                    title: l('Delete'),
                                    targets: 0,
                                    data: null,
                                    orderable: false,
                                    autoWidth: false,
                                    defaultContent: '',
                                    //className: 'text-center width-10',
                                    rowAction: {
                                        targets: 0,
                                        data: null,
                                        autoWidth: false,
                                        orderable: false,
                                        //className: 'text-center width-10',
                                        defaultContent: '',
                                        element: $("<button/>")
                                            .addClass("btn btn-danger")
                                            .attr("title", l('Delete'))
                                            .append($("<i/>").addClass("fa fa-trash")).click(function () {
                                                var record = $(this).data();
                                                members.remove(record);
                                            }),
                                        visible: function () {
                                            return _permissions.manageMembers;
                                        }
                                    }
                                },
                                {
                                    title: l('UserName'),
                                    autoWidth: false,
                                    data: 'userName',
                                    render: function (data, type, row) {
                                        if (row.isLockedOut) {
                                            return '<i data-toggle="tooltip" data-placement="top" title="' +
                                                l('ThisUserIsLockedOutMessage') +
                                                '" class="fa fa-lock text-danger"></i> ' +
                                                '<span class="opc-65">' +
                                                row.userName +
                                                '</span>';
                                        }
                                        return row.userName;
                                    }
                                },
                                {
                                    title: l('EmailAddress'),
                                    data: "email"
                                }
                            ]
                        );
                    },
                    0 //adds as the first contributor
                );

                this.dataTable = this.$table.find('table').DataTable(abp.libs.datatables.normalizeConfiguration({
                    order: [[1, "asc"]],
                    processing: true,
                    serverSide: true,
                    scrollX: true,
                    paging: true,
                    deferLoading: 0,
                    ajax: abp.libs.datatables.createAjax(function () {
                        let skipCount = (parseInt(members.dataTable.page.info().start) / parseInt(members.dataTable.page.info().length)) * parseInt(members.dataTable.page.info().length);
                        return _organizationUnitService.getMembers(organizationTree.selectedOu.id, {
                            filter: members.dataTable.search(),
                            sorting: "email asc",
                            skipCount: skipCount,
                            maxResultCount: members.dataTable.page.info().length
                        });
                    }),
                    columnDefs: abp.ui.extensions.tableColumns.get("identity.user").columns.toArray()
                }));

                $('button[name=AddMember]').click(function (e) {
                    e.preventDefault();
                    members.openAddModal();
                });

                _addMemberModal.onResult(function (newOu) {
                    members.load();
                });

                members.hideTable();
            }
        };

        var roles = {
            $table: $('#OuRolesTable'),
            $emptyInfo: $('#OuRolesEmptyInfo'),
            $addRoleToOuButton: $('#AddRoleToOuButton'),
            $selectedOuRightTitle: $('#SelectedOuRightTitle'),
            dataTable: null,

            showTable: function () {
                roles.$emptyInfo.hide();
                roles.$table.show();
                roles.$addRoleToOuButton.show();
                roles.$selectedOuRightTitle.text(organizationTree.selectedOu.displayName).show();
            },

            hideTable: function () {
                roles.$selectedOuRightTitle.hide();
                roles.$addRoleToOuButton.hide();
                roles.$table.hide();
                roles.$emptyInfo.show();
            },

            load: function () {
                if (!organizationTree.selectedOu.id) {
                    roles.hideTable();
                    return;
                }

                roles.showTable();
                this.dataTable.ajax.reload();
            },

            add: function (roleList) {
                var ouId = organizationTree.selectedOu.id;
                if (!ouId) {
                    return;
                }

                _organizationUnitService.addRoles(
                    ouId, {roleIds: roleList}
                ).done(function () {
                    roles.load();
                });
            },

            remove: function (role) {
                var ouId = organizationTree.selectedOu.id;
                if (!ouId) {
                    return;
                }

                abp.message.confirm(
                    l('RemoveRoleFromOuWarningMessage',
                        role.name,
                        organizationTree.selectedOu.displayName),
                    l('AreYouSure'),
                    function (isConfirmed) {
                        if (isConfirmed) {
                            _organizationUnitService.removeRole(ouId, role.id).done(function () {
                                roles.load();
                            });
                        }
                    }
                );
            },

            openAddModal: function () {
                var ouId = organizationTree.selectedOu.id;
                if (!ouId) {
                    return;
                }

                _addRoleModal.open({
                    organizationUnitId: ouId
                });
            },

            init: function () {
                abp.ui.extensions.tableColumns.get("organizationUnit.role.list").addContributor(
                    function (columnList) {
                        columnList.addManyTail(
                            [
                                {
                                    title: l('Delete'),
                                    targets: 0,
                                    data: null,
                                    orderable: false,
                                    defaultContent: '',
                                    //className: 'text-center width-10',
                                    autoWidth: false,
                                    rowAction: {
                                        targets: 0,
                                        data: null,
                                        orderable: false,
                                        autoWidth: false,
                                        //className: 'text-center width-10',
                                        defaultContent: '',
                                        element: $("<button/>")
                                            .addClass("btn btn-danger")
                                            .attr("title", l('Delete'))
                                            .append($("<i/>").addClass("fa fa-trash")).click(function () {
                                                var record = $(this).data();
                                                roles.remove(record);
                                            }),
                                        visible: function () {
                                            return _permissions.manageRoles;
                                        }
                                    }
                                },
                                {
                                    title: l('RoleName'),
                                    data: "name",
                                    autoWidth: false,
                                    render: function (data, type, row) {
                                        var name = '<span>' + data + '</span>';
                                        if (row.isDefault) {
                                            name += '<span class="badge badge-pill badge-success ml-1">' + l('DisplayName:IsDefault') + '</span>';
                                        }
                                        if (row.isPublic) {
                                            name += '<span class="badge badge-pill badge-info ml-1">' + l('DisplayName:IsPublic') + '</span>';
                                        }
                                        return name;
                                    }
                                }
                            ]
                        );
                    },
                    0 //adds as the first contributor
                );

                this.dataTable = this.$table.find('table').DataTable(abp.libs.datatables.normalizeConfiguration({
                    order: [[1, "asc"]],
                    searching: false,
                    processing: true,
                    scrollX: true,
                    serverSide: true,
                    paging: true,
                    deferLoading: 0,
                    ajax: abp.libs.datatables.createAjax(function () {
                        //return _organizationUnitService.getRoles(organizationTree.selectedOu.id);
                        let skipCount = (parseInt(roles.dataTable.page.info().start) / parseInt(roles.dataTable.page.info().length)) * parseInt(roles.dataTable.page.info().length);
                        return _organizationUnitService.getRoles(organizationTree.selectedOu.id, {
                            filter: roles.dataTable.search(),
                            sorting: "name asc",
                            skipCount: skipCount,
                            maxResultCount: roles.dataTable.page.info().length
                        });
                    }),
                    columnDefs: abp.ui.extensions.tableColumns.get("organizationUnit.role.list").columns.toArray()
                }));

                $('button[name=AddRole]').click(function (e) {
                    e.preventDefault();
                    roles.openAddModal();
                });

                _addRoleModal.onResult(function (newRoles) {
                    roles.load();
                });
                roles.hideTable();
            }
        };

        members.init();
        roles.init();
        organizationTree.init();
        ou.members = members;
        ou.roles = roles;
    });

    let selectedIds = [];
    let selectedOu = {};
    let selectedCheckboxNames;
    let selectAllHeaderTitle = '<div class="custom-checkbox custom-control no-height">' +
        '<input type="checkbox" id="select_all" name="select-all" class="custom-control-input custom-selectbox" value="false" data-val="false">' +
        '<label class="custom-control-label" for="select_all"></label></div>';

    ou.checkbox = {
        initialize: function (selectedCbNames) {
            selectedIds = [];
            selectedCheckboxNames = selectedCbNames;
        },
        getSelectedIds: function () {
            return selectedIds;
        },
        setSelectedOu: function (ou) {
            selectedOu = ou;
        },
        getSelectedOu: function () {
            return selectedOu;
        },
        getSelectAllHeaderTitle: function () {
            return selectAllHeaderTitle;
        }
    };

    $(document).on('click', '.custom-selectbox', function (el) {
        el.stopPropagation();
        if (!$(el.target).is(':checkbox')) {
            return;
        }

        if ($(el.target).prop("checked") == true) {
            checkAndAddAll();
        } else if ($(el.target).prop("checked") == false) {
            uncheckAndRemoveAll();
        }

    });

    $(document).on('click', '.selectable', function (el) {
        el.stopPropagation();
        selectDeselect(el);
    });

    const checkAndAddAll = function () {
        $('table>tbody>').find('input[type="checkbox"]').prop("checked", true);
        let selectedItems = $(`input[name="${selectedCheckboxNames}"]:checked`);
        selectedIds = [];
        for (var i = 0; typeof (selectedItems[i]) != 'undefined'; selectedIds.push(selectedItems[i++].getAttribute('id'))) ;
    };

    const uncheckAndRemoveAll = function () {
        $('table>tbody>').find('input[type="checkbox"]').prop("checked", false);
        selectedIds = [];
    };

    const addId = function (id) {
        selectedIds.push(id);
    };

    const removeId = function (id) {
        selectedIds = selectedIds.filter(function (e) {
            return e !== id;
        });
    };

    const selectDeselect = function (el) {
        $el = $(el);
        if ($(el.target).is(':checkbox')) {
            el.preventDefault();
            return;
        }

        if (!$(el.target).is(':checkbox')) {
            $el = $(el.target).parent().closest('tr').find('[type=checkbox]');

            if ($el.prop("checked") == true) {
                $el.prop("checked", false);
            } else if ($el.prop("checked") == false) {
                $el.prop("checked", true);
            }
        }

        if ($el.prop("checked") == true) {
            addId($el.attr('id'));
        } else if ($el.prop("checked") == false) {
            removeId($el.attr('id'));
        }
    }
})();
