initSidebarItems({"enum":[["WlShellSurfaceEvent",""],["WlShellSurfaceFullscreenMethod","different method to set the surface fullscreenHints to indicate to the compositor how to deal with a conflict between the dimensions of the surface and the dimensions of the output. The compositor is free to ignore this parameter."]],"mod":[["WlShellSurfaceResize","edge values for resizingThese values are used to indicate which edge of a surface is being dragged in a resize operation. The server may use this information to adapt its behavior, e.g. choose an appropriate cursor image."],["WlShellSurfaceTransient","details of transient behaviourThese flags specify details of the expected behaviour of transient surfaces. Used in the set_transient request."]],"struct":[["WlShell","create desktop-style surfacesThis interface is implemented by servers that provide desktop-style user interfaces.It allows clients to associate a wl_shell_surface with a basic surface."],["WlShellSurface","desktop-style metadata interfaceAn interface that may be implemented by a wl_surface, for implementations that provide a desktop-style user interface.It provides requests to treat surfaces like toplevel, fullscreen or popup windows, move, resize or maximize them, associate metadata like title and class, etc.On the server side the object is automatically destroyed when the related wl_surface is destroyed.  On client side, wl_shell_surface_destroy() must be called before destroying the wl_surface object."]]});