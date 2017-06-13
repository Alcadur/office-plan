import Room from './Room'
import Shape from '../shape/Shape';

export default function roomFactory() {
    return new Room(new Shape());
}