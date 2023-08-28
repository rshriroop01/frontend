import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
    // return (
    //     <div class="container">
    //     <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    //     <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    //         {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
    //         <span class="fs-4">Loan Admin Management Application</span>
    //     </a>

    //     <ul class="nav nav-pills">
    //         <li class="nav-item"><a href="/register" class="nav-link active" aria-current="page">Home</a></li>
    //         <li class="nav-item"><a href="/register" class="nav-link " aria-current="page">Register</a></li>
    //         <li class="nav-item"><a href="/login" class="nav-link " aria-current="page">Login</a></li>
    //         <li class="nav-item"><a href="#" class="nav-link">About</a></li>
    //     </ul>
    //     </header>
    //     </div>
    // );

    return (
        <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand d-md-none" href="#">
                    {/* <svg class="bi" width="24" height="24"><use xlink: href="#aperture"></use></svg> */}
                    Aperture
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav flex-grow-1 justify-content-between">
                            <li class="nav-item"><a class="nav-link" href="#">
                                {/* <svg class="bi" width="24" height="24"><use xlink: href="#aperture"></use></svg> */}
                            </a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Tour</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Product</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Enterprise</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">
                                {/* <svg class="bi" width="24" height="24"><use xlink: href="#cart"></use></svg> */}
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )


}