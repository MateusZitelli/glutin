initSidebarItems({"enum":[["WlSurfaceEvent",""]],"struct":[["WlCompositor","the compositor singletonA compositor.  This object is a singleton global.  The compositor is in charge of combining the contents of multiple surfaces into one displayable output."],["WlRegion","region interfaceA region object describes an area.Region objects are used to describe the opaque and input regions of a surface."],["WlSurface","an onscreen surfaceA surface is a rectangular area that is displayed on the screen. It has a location, size and pixel contents.The size of a surface (and relative positions on it) is described in surface local coordinates, which may differ from the buffer local coordinates of the pixel content, in case a buffer_transform or a buffer_scale is used.A surface without a \"role\" is fairly useless, a compositor does not know where, when or how to present it. The role is the purpose of a wl_surface. Examples of roles are a cursor for a pointer (as set by wl_pointer.set_cursor), a drag icon (wl_data_device.start_drag), a sub-surface (wl_subcompositor.get_subsurface), and a window as defined by a shell protocol (e.g. wl_shell.get_shell_surface).A surface can have only one role at a time. Initially a wl_surface does not have a role. Once a wl_surface is given a role, it is set permanently for the whole lifetime of the wl_surface object. Giving the current role again is allowed, unless explicitly forbidden by the relevant interface specification.Surface roles are given by requests in other interfaces such as wl_pointer.set_cursor. The request should explicitly mention that this request gives a role to a wl_surface. Often, this request also creates a new protocol object that represents the role and adds additional functionality to wl_surface. When a client wants to destroy a wl_surface, they must destroy this 'role object' before the wl_surface.Destroying the role object does not remove the role from the wl_surface, but it may stop the wl_surface from \"playing the role\". For instance, if a wl_subsurface object is destroyed, the wl_surface it was created for will be unmapped and forget its position and z-order. It is allowed to create a wl_subsurface for the same wl_surface again, but it is not allowed to use the wl_surface as a cursor (cursor is a different role than sub-surface, and role switching is not allowed)."]]});