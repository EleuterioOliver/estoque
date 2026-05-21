import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Inventory2, Dashboard, SwapHoriz, logout, ArrowOutward, AssignmentReturn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar(){
    const { logout } = useAuth();

    return(
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
               background: "#fff",
               borderBottom: "1px solid #e5e7eb",
               color: "#111827",
               px: 2,
            }}
        >
            <toolbar
                sx = {{
                    minHeight: 72,
                    display: "flex",
                    gap: 2
                }}
            >
                 <Box
                     sx = {{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexGrow: 1,
                    }}
                 >
                    <Inventory2
                       sx={{
                        color="#15176b",
                        fontSize: 32
                    }}/>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "#15176b",
                            letterSpacing:0.5,
                        }}
                    >
                        Almoxarifado
                    </Typography>    
                 </Box>
                 <Button
                    component={Link}
                    to="/itens"
                    startIcon={<Inventory2/>}
                    sx={{
                        color:"#4b5563",
                        fontWeight: 600,
                        borderRadius: "12px",
                        px: 2,
                        py: 1,
                        textTransform: "nome",
                        "&:hover":{
                            backgroundColor:"#eef2ff",
                            color:"#15176b",
                        },
                    }}
                 >
                    Cadastro
                 </Button>
                 <Button
                     component={Link}
                     to="/retirar"
                     startIcon={<ArrowOutward/>}
                >
                    Retirada
                 </Button>
                 <Button
                     component={Link}
                     to="/devolver"
                     startIcon={<AssignmentReturn/>}
                 > 
                    Devolução
                 </Button>
                 <Button
                    component={Link}
                    to="/movimentacoes"
                    startIcon={<SwapHoriz/>}
                 >
                    Movimentações
                 </Button>
                 <Button
                    component={Link}
                    to="/dashboard"
                    startIcon={<Dashboard/>}
                 >
                    Dashboard
                 </Button>
                 <Button
                     onClick={logout}
                     startIcon={<Logout/>}
                     variant="contained"
                 >
                    Sair
                 </Button>
            </toolbar>    
        </AppBar>
    );
}