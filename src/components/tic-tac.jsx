import React, { useState } from "react";
import { Box, Container, Button, Typography } from "@mui/material";

const initial = Array.from({ length: 9 }, () => null);
console.log(initial);

export default function Tictac() {
  const [board, setboard] = useState(initial);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [result, setResult] = useState("");
  console.log("result", result);

  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handlewinner = (board) => {
    for (let values of winner) {
      const [a, b, c] = values;

      if (board[a] === board[b] && board[a] === board[c]) {
        setResult(board[a]);
      }

      console.log("shihas", [a, b, c]);
    }
  };

  const handleClick = (index) => {
    if (board[index] === null && !result) {
      const newboard = [...board];
      newboard[index] = currentPlayer;
      setboard(newboard);
      handlewinner(newboard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const handleRestart = () => {
    setboard(initial);
    setCurrentPlayer("X");
    setResult("");
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#282c34", // Darker background for contrast
        flexDirection: "column",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
    >
      <Typography variant="h5" color="#61dafb" sx={{ marginBottom: "20px" }}>
        {result ? `Winner: ${result}` : `Current Turn: ${currentPlayer}`}
      </Typography>

      <Button
        sx={{
          backgroundColor: "#61dafb", 
          color: "white",
          marginBottom: "40px",
          padding: "10px 20px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#21a1f1", 
          },
        }}
        onClick={handleRestart}
      >
        Restart
      </Button>

      <Box
        sx={{
          width: "300px", 
          height: "300px", 
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
        }}
      >
        {board.map((value, index) => {
          return (
            <Button
              key={index}
              variant="outlined"
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #61dafb", 
                fontSize: "24px", 
                "&:hover": {
                  backgroundColor: "#f0f0f0", 
                },
              }}
              onClick={() => handleClick(index)}
            >
              {value}
            </Button>
          );
        })}
      </Box>
    </Container>
  );
}
