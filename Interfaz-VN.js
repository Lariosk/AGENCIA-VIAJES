import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Clase para representar un viaje
class Viaje {
    private int id;
    private String destino;
    private String fecha;

    public Viaje(int id, String destino, String fecha) {
        this.id = id;
        this.destino = destino;
        this.fecha = fecha;
    }

    public int getId() {
        return id;
    }

    public String getDestino() {
        return destino;
    }

    public String getFecha() {
        return fecha;
    }
}

// Clase para manejar operaciones CRUD de viajes
class ViajeManager {
    private List<Viaje> viajes;
    private int nextId;

    public ViajeManager() {
        viajes = new ArrayList<>();
        nextId = 1;
    }

    // Método para agregar un nuevo viaje
    public void agregarViaje(String destino, String fecha) {
        viajes.add(new Viaje(nextId++, destino, fecha));
    }

    // Método para obtener todos los viajes
    public List<Viaje> obtenerTodosLosViajes() {
        return viajes;
    }

    // Método para actualizar un viaje existente
    public void actualizarViaje(int id, String destino, String fecha) {
        for (Viaje viaje : viajes) {
            if (viaje.getId() == id) {
                viaje.destino = destino;
                viaje.fecha = fecha;
                break;
            }
        }
    }

    // Método para eliminar un viaje
    public void eliminarViaje(int id) {
        viajes.removeIf(viaje -> viaje.getId() == id);
    }
}

// Clase principal para probar el CRUD de viajes
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ViajeManager viajeManager = new ViajeManager();

        while (true) {
            System.out.println("1. Agregar viaje");
            System.out.println("2. Mostrar todos los viajes");
            System.out.println("3. Actualizar viaje");
            System.out.println("4. Eliminar viaje");
            System.out.println("5. Salir");
            System.out.print("Seleccione una opción: ");
            int opcion = scanner.nextInt();
            scanner.nextLine(); // Consumir el salto de línea

            switch (opcion) {
                case 1:
                    System.out.print("Ingrese el destino del viaje: ");
                    String destino = scanner.nextLine();
                    System.out.print("Ingrese la fecha del viaje: ");
                    String fecha = scanner.nextLine();
                    viajeManager.agregarViaje(destino, fecha);
                    System.out.println("Viaje agregado correctamente.");
                    break;
                case 2:
                    System.out.println("Lista de viajes:");
                    List<Viaje> viajes = viajeManager.obtenerTodosLosViajes();
                    for (Viaje viaje : viajes) {
                        System.out.println("ID: " + viaje.getId() + ", Destino: " + viaje.getDestino() + ", Fecha: " + viaje.getFecha());
                    }
                    break;
                case 3:
                    System.out.print("Ingrese el ID del viaje que desea actualizar: ");
                    int idActualizar = scanner.nextInt();
                    scanner.nextLine(); // Consumir el salto de línea
                    System.out.print("Ingrese el nuevo destino del viaje: ");
                    String nuevoDestino = scanner.nextLine();
                    System.out.print("Ingrese la nueva fecha del viaje: ");
                    String nuevaFecha = scanner.nextLine();
                    viajeManager.actualizarViaje(idActualizar, nuevoDestino, nuevaFecha);
                    System.out.println("Viaje actualizado correctamente.");
                    break;
                case 4:
                    System.out.print("Ingrese el ID del viaje que desea eliminar: ");
                    int idEliminar = scanner.nextInt();
                    scanner.nextLine(); // Consumir el salto de línea
                    viajeManager.eliminarViaje(idEliminar);
                    System.out.println("Viaje eliminado correctamente.");
                    break;
                case 5:
                    System.out.println("¡Hasta luego!");
                    System.exit(0);
                default:
                    System.out.println("Opción inválida. Por favor, seleccione una opción válida.");
            }
        }
    }
}
Este es un ejemplo simple que utiliza una lista para almacenar los viajes. En un caso real, es posible que desees utilizar una base de datos para almacenar los datos de forma persistente. Además, este ejemplo no incluye validaciones de entrada, por lo que en un entorno de producción, deberías agregar manejo de errores y validación de entrada adecuados.




ChatGPT puede cometer errores. Considera verificar la información importante.
