defmodule DistributedCounterWeb.UserSocket do
  use Phoenix.Socket
  transport :websocket, Phoenix.Transports.WebSocket

  channel "counter:*", DistributedCounterWeb.Counter
  
  def connect(_params, socket) do
    {:ok,socket}
  end

  def id(_socket), do: nil
end
